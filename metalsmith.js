const Metalsmith  = require('metalsmith');
const collections = require('@metalsmith/collections');
const markdown    = require('@metalsmith/markdown');
const metallic    = require('metalsmith-metallic');
const permalinks  = require('@metalsmith/permalinks');
const layouts     = require('@metalsmith/layouts');
const metalsmithConcat = require('metalsmith-concat');
const handlebars = require('handlebars');
const dotenv = require('dotenv')

const fs = require('fs');
handlebars.registerPartial('header', fs.readFileSync(__dirname + '/layouts/partials/header.hbs').toString());
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/layouts/partials/footer.hbs').toString());

Metalsmith(__dirname)         
  .metadata({
    sitename: "WebAppDev",
    description: "Dokumentation FHNW CAS Web Applikationen",
    siteurl: dotenv.SITEURL
  })
  .source('./src')
  .destination('./docs')
  .clean(true)
  .use(collections({
    javascript: { 
      pattern: 'posts/javascript/*.md',
      reverse: true,
      sortBy: 'date' 
    },
    html: { 
      pattern: 'posts/html/*.md',
      reverse: true,
      sortBy: 'date' 
    },
    css: { 
      pattern: 'posts/css/*.md',
      reverse: true,
      sortBy: 'date'
    }
  }))
  .use(metallic())
  .use(markdown())
  .use(permalinks({
    relative: true,
    pattern: ':title',
    slug: {
      lower: true,
      strict: true
    },
    linksets: [
      {
        match: { collection: 'javascript' },
        pattern: 'javascript/:title'
      },
      {
        match: { collection: 'html' },
        pattern: 'html/:title'
      },
      {
        match: { collection: 'css' },
        pattern: 'css/:title'
      }
    ]
  }))
  .use(
    layouts({
        engine: 'handlebars',
        directory: './layouts',
        
        partials: {
          header: 'partials/header',
          footer: 'partials/footer',
        },
        engineOptions: {        
          helpers: {
            formattedDate: function (date) {
              return new Date(date).toLocaleDateString()
            }
          }
        }
    })
  )
  .use(
    metalsmithConcat({
      files: '*.css',
      output: 'style.css',
      searchPaths: 'css',
    })
  )
  .build(function(err) {
    if (err) throw err;
  });