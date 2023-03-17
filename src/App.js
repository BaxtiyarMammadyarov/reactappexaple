
import './App.css';
import Product from './components/product/product';

function App() {
  const products = [  {
    "title": "Data Quality Fundamentals",
    "subtitle": "A Practitioner&#039;s Guide to Building Trustworthy Data Pipelines",
    "isbn13": "9781098112042",
    "price": "$46.95",
    "image": "https://itbook.store/img/books/9781098112042.png",
    "url": "https://itbook.store/books/9781098112042",
    "countity" : "0"
  },
  {
    "title": "Learning Google Analytics",
    "subtitle": "Creating Business Impact and Driving Insights",
    "isbn13": "9781098113087",
    "price": "$49.94",
    "image": "https://itbook.store/img/books/9781098113087.png",
    "url": "https://itbook.store/books/9781098113087",
    "countity" : "0"
  },
  {
    "title": "Learning Blazor",
    "subtitle": "Build Single-Page Apps with WebAssembly and C#",
    "isbn13": "9781098113247",
    "price": "$36.99",
    "image": "https://itbook.store/img/books/9781098113247.png",
    "url": "https://itbook.store/books/9781098113247",
    "countity" : "0"
  },
  {
    "title": "Scaling Python with Ray",
    "subtitle": "Adventures in Cloud and Serverless Patterns",
    "isbn13": "9781098118808",
    "price": "$36.99",
    "image": "https://itbook.store/img/books/9781098118808.png",
    "url": "https://itbook.store/books/9781098118808",
    "countity" : "0"
  },
  {
    "title": "Trino: The Definitive Guide, 2nd Edition",
    "subtitle": "SQL at Any Scale, on Any Storage, in Any Environment",
    "isbn13": "9781098137236",
    "price": "$52.99",
    "image": "https://itbook.store/img/books/9781098137236.png",
    "url": "https://itbook.store/books/9781098137236",
    "countity" : "10"
  },
  {
    "title": "Genomics in the Azure Cloud",
    "subtitle": "Scaling Your Bioinformatics Workloads Using Enterprise-Grade Solutions",
    "isbn13": "9781098139049",
    "price": "$63.57",
    "image": "https://itbook.store/img/books/9781098139049.png",
    "url": "https://itbook.store/books/9781098139049",
    "countity" : "5"
  },
  {
    "title": "Modern System Administration",
    "subtitle": "Managing Reliable and Sustainable Systems",
    "isbn13": "9781492055211",
    "price": "$59.99",
    "image": "https://itbook.store/img/books/9781492055211.png",
    "url": "https://itbook.store/books/9781492055211",
    "countity" : "0"
  },
  {
    "title": "Developing on AWS with C#",
    "subtitle": "A Comprehensive Guide on Using C# to Build Solutions on the AWS Platform",
    "isbn13": "9781492095873",
    "price": "$46.95",
    "image": "https://itbook.store/img/books/9781492095873.png",
    "url": "https://itbook.store/books/9781492095873",
    "countity" : "0"
  },
  {
    "title": "Building Evolutionary Architectures, 2nd Edition",
    "subtitle": "Automated Software Governance",
    "isbn13": "9781492097549",
    "price": "$69.99",
    "image": "https://itbook.store/img/books/9781492097549.png",
    "url": "https://itbook.store/books/9781492097549",
    "countity" : "5"
  },
  {
    "title": "Applied Machine Learning and AI for Engineers",
    "subtitle": "Solve Business Problems That Can&#039;t Be Solved Algorithmically",
    "isbn13": "9781492098058",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781492098058.png",
    "url": "https://itbook.store/books/9781492098058",
    "countity" : "50"
  }];
  return (
    <div className="App pr-1">
     {products.map((product)=><Product key= {product.isbn13} title = {product.title} price ={product.price}  url = {product.image} countity = {product.countity}/>)}
    </div>
  );
}

export default App;
