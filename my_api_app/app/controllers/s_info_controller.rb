class SInfoController < ApplicationController
    def index
        @s_info = SInfo.all
        render json: @s_info
    end

    def create
        @s_info = SInfo.new(s_info_params)
        if @s_info.save
          render json: @s_info, status: :created, location: @s_info
        else
          render json: @s_info.errors, status: :unprocessable_entity
        end
    end

    private

    def s_info_params
        params.require(:s_info).permit(:imageUrl, :heading, :slogon, :btnName, :redirectBtn)
    end
end
