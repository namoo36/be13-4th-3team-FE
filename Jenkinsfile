pipeline {
    agent {
        kubernetes {
            yaml '''
            apiVersion: v1
            kind: Pod
            metadata:
              name: jenkins-agent
            spec:
              containers:
              - name: node
                image: node:18-alpine
                command:
                - cat
                tty: true
              - name: docker
                image: docker:27.2.0-alpine3.20
                command:
                - cat
                tty: true
                volumeMounts:
                - mountPath: "/var/run/docker.sock"
                  name: docker-socket
              volumes:
              - name: docker-socket
                hostPath:
                  path: "/var/run/docker.sock"
            '''
        }
    }

    environment {
        TAG = "latest"
        DOCKER_IMAGE_NAME = 'namoo36/yygang-app'
        DOCKER_CREDENTIALS_ID = 'dockerhub-access'
    }

    stages {
        stage('Install & Build') {
            steps {
                container('node') {
                    sh 'pwd'
                    sh 'ls -al'
                    sh 'npm install'
                    sh 'chmod +x node_modules/.bin/vite'
                    sh 'npm run build'
                }
            }
        }

        stage('Image build & Push') {
            steps {
                container('docker') {
                    script {
                        def dockerImageVersion = "${env.BUILD_NUMBER}"

                        sh 'docker logout'

                        withCredentials([usernamePassword(
                            credentialsId: DOCKER_CREDENTIALS_ID,
                            usernameVariable: 'DOCKER_USERNAME',
                            passwordVariable: 'DOCKER_PASSWORD'
                        )]) {
                            sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        }

                        withEnv(["DOCKER_IMAGE_VERSION=${dockerImageVersion}"]) {
                            sh 'docker -v'
                            sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION .'
                            sh 'docker image inspect $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION'
                            sh 'docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_VERSION'
                        }
                    }
                }
            }
        }

        // stage('Trigger yygang-manifest') {
        //     steps {
        //         script {
        //             def dockerImageVersion = "${env.BUILD_NUMBER}"

        //             withEnv(["DOCKER_IMAGE_VERSION=${dockerImageVersion}"]) {
        //                 build job: 'yygang-manifest',
        //                 parameters: [
        //                     string(name: 'DOCKER_IMAGE_VERSION', value: "${DOCKER_IMAGE_VERSION}")
        //                 ],
        //                 wait: true
        //             }
        //         }
        //     }
        // }
    }

    post {
        always {
            withCredentials([string(
                credentialsId: 'discord-webhook',
                variable: 'DISCORD_WEBHOOK_URL'
            )]) {
                discordSend description: """
                제목 : ${currentBuild.displayName}
                결과 : ${currentBuild.result}
                실행 시간 : ${currentBuild.duration / 1000}s
                """,
                result: currentBuild.currentResult,
                title: "${env.JOB_NAME} : ${currentBuild.displayName}",
                webhookURL: "${DISCORD_WEBHOOK_URL}"
            }
        }
    }
}
