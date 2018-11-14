require 'test_helper'

class FeaturesControllerTest < ActionDispatch::IntegrationTest
  test "should get search_user" do
    get features_search_user_url
    assert_response :success
  end

end
