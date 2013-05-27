require 'spec_helper'
  
  describe Role do

    it { should have_many(:users_roles) } 
    it { should have_many(:users).through(:users_roles) }

  end
