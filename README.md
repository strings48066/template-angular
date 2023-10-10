# Angular Website Hosted on a Secure S3 Bucket with CI/CD

## Prerequisites

- Node.js and npm
- Angular CLI
- AWS CLI installed and configured
- Terraform v1.x
- Terraform Cloud account

## Setup Terraform Cloud Workspace

1. Log in to Terraform Cloud and create a new workspace.
2. Connect the workspace to this GitHub repository.
3. Set Terraform variables as needed.

## Usage

### Local Development

1. Clone the repository
    ```bash
    git clone https://github.com/your-repo/angular-s3-internal-website.git
    ```
   
2. Navigate to the Angular app directory and install dependencies
    ```bash
    cd angular-app
    npm install
    ```

3. Start the Angular app
    ```bash
    ng serve
    ```

### CI/CD Pipeline Overview

#### Continuous Integration (CI)

1. **Lint and Test**: On every push, GitHub Actions will lint your code and run any defined tests.
   - Check `.github/workflows/ci.yml` for the CI setup.

#### Continuous Deployment (CD)

1. **Terraform Plan and Apply**: After successful CI, GitHub Actions will trigger Terraform to provision or update the S3 bucket.
2. **Deploy to S3**: The built Angular app will be uploaded to the S3 bucket.
   - Check `.github/workflows/cd.yml` for the CD setup.

## Contributing

Feel free to submit PRs or issues for improvements and bug fixes.
# template-angular
