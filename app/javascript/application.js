// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//import jQuery from "jQuery"
// import { Application } from "stimulus"
import { Application } from "@hotwired/stimulus"
const application = Application.start()

// const context = require.context("./controllers", true, /\.js$/)
// application.load(definitionsFromContext(context))
