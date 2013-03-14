require 'test_helper'

class UserControllerTest < ActionController::TestCase

  test "should get userpage" do
    get :userpage
    assert_response :success
  end

end
