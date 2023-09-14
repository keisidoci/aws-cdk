const cdk = require("aws-cdk-lib");
const { Construct } = require("constructs");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const lambda = require("aws-cdk-lib/aws-lambda");
const s3 = require("aws-cdk-lib/aws-s3");
const path = require("path");
const { NodejsFunction } = require("aws-cdk-lib/aws-lambda-nodejs");

class WidgetService extends Construct {
  constructor(scope, id) {
    super(scope, id);

// Products lambda

    const getProducts = new NodejsFunction(this, "GetProducts", {
      runtime:  cdk.aws_lambda.Runtime.NODEJS_18_X,
       entry: path.join(__dirname, "../resources/productsHandler/GetProducts.js"),
      handler: "handler",

    });

    const getProductId = new NodejsFunction(this, "GetProductId", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productsHandler/GetProductId.js"),
      handler: "handler",
    });
    
    const createProduct = new NodejsFunction(this, "CreateProduct", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productsHandler/CreateProduct.js"),
      handler: "handler",
    });

    const deleteProduct = new NodejsFunction(this, "DeleteProduct", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productsHandler/DeleteProduct.js"),
      handler: "handler",
    });

    const updateProduct = new NodejsFunction(this, "UpdateProduct", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productsHandler/UpdateProduct.js"),
      handler: "handler",
    });

    const productPages = new NodejsFunction(this, "ProductPages", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productsHandler/ProductPages.js"),
      handler: "handler",
    });

    // Category lambda

    const getCategory = new NodejsFunction(this, "GetCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/categoryHandler/GetCategory.js"),
      handler: "handler",
    });

    const getCategoryId = new NodejsFunction(this, "GetCategoryId", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/categoryHandler/GetCategoryId.js"),
      handler: "handler",
    });

    const createCategory = new NodejsFunction(this, "CreateCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/categoryHandler/CreateCategory.js"),
      handler: "handler",
    });

    const updateCategory = new NodejsFunction(this, "UpdateCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/categoryHandler/UpdateCategory.js"),
      handler: "handler",
    });

    const deleteCategory = new NodejsFunction(this, "DeleteCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/categoryHandler/DeleteCategory.js"),
      handler: "handler",
    });

    // ProductCategory lambda

    const getProductCategory = new NodejsFunction(this, "GetProductCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productCategoryHandler/GetProductCategory.js"),
      handler: "handler",
    });

    const getProductCategoryId = new NodejsFunction(this, "GetProductCategoryId", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productCategoryHandler/GetProductCategoryId.js"),
      handler: "handler",
    });

    const createProductCategory = new NodejsFunction(this, "CreateProductCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productCategoryHandler/CreateProductCategory.js"),
      handler: "handler",
    });

    const deleteProductCategory = new NodejsFunction(this, "DeleteProductCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productCategoryHandler/DeleteProductCategory.js"),
      handler: "handler",
    });

    const updateProductCategory = new NodejsFunction(this, "UpdateProductCategory", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/productCategoryHandler/UpdateProductCategory.js"),
      handler: "handler",
    });

    // Review Lambda

    const createReview = new NodejsFunction(this, "CreateReview", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/reviewHandler/CreateReview.js"),
      handler: "handler",
    });

    const getReview = new NodejsFunction(this, "GetReview", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/reviewHandler/GetReview.js"),
      handler: "handler",
    });

    const getReviewId = new NodejsFunction(this, "GetReviewId", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/reviewHandler/GetReviewId.js"),
      handler: "handler",
    });

    const deleteReview = new NodejsFunction(this, "DeleteReview", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/reviewHandler/DeleteReview.js"),
      handler: "handler",
    });

    const updateReview = new NodejsFunction(this, "UpdateReview", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../resources/reviewHandler/UpdateReview.js"),
      handler: "handler",
    });

    // API Gateway

const customResource = new apigateway.Resource(this, 'CustomResource', {
  parent: api.root,
  pathPart: 'findProducts',
});

// Products API
const productResource = new apigateway.Resource(this, 'ProductResource', {
  parent: customResource,
  pathPart: 'products',
});

const productIdResource = productResource.addResource('{productId}');

productResource.addMethod('GET', new apigateway.LambdaIntegration(getProducts));
productResource.addMethod('POST', new apigateway.LambdaIntegration(createProduct));
productIdResource.addMethod('GET', new apigateway.LambdaIntegration(getProductId));
productIdResource.addMethod('PUT', new apigateway.LambdaIntegration(updateProduct));
productIdResource.addMethod('DELETE', new apigateway.LambdaIntegration(deleteProduct));
productResource.addMethod('GET', new apigateway.LambdaIntegration(productPages));

// Category API
const categoryResource = new apigateway.Resource(this, 'CategoryResource', {
  parent: customResource,
  pathPart: 'category',
});

const categoryIdResource = categoryResource.addResource('{categoryId}');

categoryResource.addMethod('GET', new apigateway.LambdaIntegration(getCategory));
categoryResource.addMethod('POST', new apigateway.LambdaIntegration(createCategory));
categoryIdResource.addMethod('GET', new apigateway.LambdaIntegration(getCategoryId));
categoryIdResource.addMethod('PUT', new apigateway.LambdaIntegration(updateCategory));
categoryIdResource.addMethod('DELETE', new apigateway.LambdaIntegration(deleteCategory));

// ProductCategory API
const productCategoryResource = new apigateway.Resource(this, 'ProductCategoryResource', {
  parent: customResource,
  pathPart: 'productCategory',
});

const productCategoryIdResource = productCategoryResource.addResource('{productCategoryId}');

productCategoryResource.addMethod('GET', new apigateway.LambdaIntegration(getProductCategory));
productCategoryResource.addMethod('POST', new apigateway.LambdaIntegration(createProductCategory));
productCategoryIdResource.addMethod('GET', new apigateway.LambdaIntegration(getProductCategoryId));
productCategoryIdResource.addMethod('PUT', new apigateway.LambdaIntegration(updateProductCategory));
productCategoryIdResource.addMethod('DELETE', new apigateway.LambdaIntegration(deleteProductCategory));

// Review API
const reviewResource = new apigateway.Resource(this, 'ReviewResource', {
  parent: customResource,
  pathPart: 'review',
});

const reviewIdResource = reviewResource.addResource('{reviewId}');

reviewResource.addMethod('GET', new apigateway.LambdaIntegration(getReview));
reviewResource.addMethod('POST', new apigateway.LambdaIntegration(createReview));
reviewIdResource.addMethod('GET', new apigateway.LambdaIntegration(getReviewId));
reviewIdResource.addMethod('PUT', new apigateway.LambdaIntegration(updateReview));
reviewIdResource.addMethod('DELETE', new apigateway.LambdaIntegration(deleteReview));

}
}
   

module.exports = { WidgetService }