# name: discourse-custom-home
# about: Custom home page for a community
# version: 0.0.1
# authors: Aman Jagga

register_asset "stylesheets/custom-home.scss"
after_initialize do
  require_dependency "application_controller"
  Discourse::Application.routes.append do
    get '/home' => 'custom#index'
    get '/home/page' => 'try#index'
  end

  class ::TryController < ::ApplicationController
    def index
      render nothing:true
    end
  end

  class ::CustomController < ActionController::Base
  	include CurrentUser
    def index
   		if (current_user)
   			redirect_to('/')
			else
				redirect_to('/home/page')
			end
    end
  end
end

