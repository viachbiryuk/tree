pipeline {

    agent {
        docker {
            image 'node:8'
            args '-u root:root'
        }
    }

    stages {
        stage('Install Dependencies') {
          steps {
             sh "npm install"
             /*
             withDockerContainer(args: "-u root", image: "${JOB_NAME}") {
                 sh "npm install"
             } */
          }
        }
        stage('build') {
            steps {
                sh 'node --version'
                sh 'echo "Node.js Rules!"'
                sh 'npm run build'
            }
        }
        stage('lint') {
            steps {
                sh 'node test.js'
            }
        }
        stage('test') {
            steps {
              echo 'test-stage'
            }
        }
        stage('Deploy to Dev') {
            steps {
                echo '... Deploying, to Dev hehe ...'
            }
        }
        stage('Deploy to QA') {
            steps {
                echo '... Deploying, to QA hehe ...'
            }
        }
        stage('Deploy to Live') {
            steps {
                echo '... Deploying, to Live hehe ...'
            }
        }
    }

    environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE = 'postgres'
    }

    post {
        always {
            echo '01. This will always run'
            /* deleteDir()    clean up our workspace */
        }
        success {
            echo '02. This will run only on Success'
            slackSend channel: '#__jenkins',
                      color: 'good',
                      message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."

        }
        failure {
            echo '03. This will run only if failed'
        }
        unstable {
            echo '04. This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state pipeline was changed'
            echo 'For example, if the Pipeline was previously failing but is not success'
        }
    }

}
