require 'test_helper'

class FeedsControllerTest < ActionDispatch::IntegrationTest
  test "should get public" do
    get feeds_public_url
    assert_response :success
  end

  test "should get personal" do
    get feeds_personal_url
    assert_response :success
  end

  test "should get following" do
    get feeds_following_url
    assert_response :success
  end

end
