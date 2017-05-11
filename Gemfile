source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.0'
gem 'pg'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'jquery-rails'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
gem 'bcrypt', '~> 3.1.7'
gem 'dotenv-rails'

gem 'jquery-rails'
gem 'bootstrap-sass'
gem 'bootstrap-will_paginate'
gem 'will_paginate'
gem 'simple_form'
gem "wysiwyg-rails"
gem 'font-awesome-rails'
gem 'font-awesome-sass', '~> 4.7.0'
gem 'carrierwave', '~> 1.0'
gem 'rmagick', '~> 2.15', '>= 2.15.4'

gem 'devise', git: 'https://github.com/gogovan/devise.git', branch: 'rails-5.1'
gem 'erubis'
gem 'pg_search'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
  gem 'rspec', '~> 3.0'
  gem 'rspec-rails', '~> 3.5'
  gem 'pry-nav'
  gem 'pry-rails'
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'faker'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
