class User < ApplicationRecord
  authenticates_with_sorcery!

  class << self
    def login params
      authenticate(*params.values_at(:email, :password))
    end

    def current_user headers
      token = headers[:Authorization].to_s.split.last
      return unless token
      payload, _header = JWT.decode(token, Rails.application.secrets.secret_key_base)
      find_by(email: payload["email"])
    rescue JWT::DecodeError
      nil
    end
  end

  def auth_token
    exp = 1.hour.after.to_i
    JWT.encode({email: email, exp: exp}, Rails.application.secrets.secret_key_base)
  end
end
