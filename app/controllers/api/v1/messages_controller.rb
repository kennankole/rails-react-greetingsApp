class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.all.sample
    render json: @messages
  end
end
