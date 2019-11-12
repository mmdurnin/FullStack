class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!
    end
    
    def current_user        
        @current_user ||= User.find_by(session_token: session[:session_token])
        p @current_user
        return @current_user
    end
    
    def logged_in? 
        !!current_user
    end

    def require_login  
        redirect_to :root unless logged_in?
    end


end
