pipeline {
    agent { docker { image 'node:8' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'echo 'Node.js Rules!'
            }
        }
      }
}
