module Api
  module Admin
    class SessionsController < Admin::ApplicationController
      def create
        user = User.login(params)

        if user
          render json: { jwt: user.auth_token, name: user.email }
        else
          head :unprocessable_entity
        end
      end

      private
      def user_params
        params.permit(:email, :password)
      end
    end
  end
end
