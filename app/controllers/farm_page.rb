class FarmPage < Application

  def index
    @farm = Farm.new(Yak.all)
    render
  end
  
end
