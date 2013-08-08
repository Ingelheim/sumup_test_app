class MembersController < ApplicationController
  def index
  	@members = Member.order("overall DESC", "level DESC", "name ASC").limit(10)
  end

  def new
    @member = Member.new
  end

  def create
    @member = Member.new(params[:member])
    if @member.save
      redirect_to members_path
    else
      render 'new'
    end
  end
end
