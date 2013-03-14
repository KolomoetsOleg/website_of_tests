require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get adminpage" do
    get :adminpage
    assert_response :success
  end

end
