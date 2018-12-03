# base controller
class ApplicationController < ActionController::Base

    # protect_from_forgery unless: -> { request.format.json? }
    # protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def check_signup
        unless user_signed_in?
          '/register/cmon_let_me_in'
        end
    end


    def after_sign_in_path_for(resource)
       p "-----------------user-----------------------"
       p resource
        if Date.today <= resource.blockdate
            redirect_to '/logged_in?feed=personal'
        else
            flash[:error] = 'You are banned'
            redirect_to '/register/cmon_let_me_in'
        end
    end

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :avatar])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :avatar])
    end
end
