require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get adminpage" do
    get :adminpage
    assert_response :success
  end

  test "should get userpage" do
    get :userpage
    assert_response :success
  end

end
