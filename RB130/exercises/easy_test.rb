require 'minutest/autorun'

class SimpleTest < Minitest::Test
  def test_odd
    assert_equal(true, value.odd?)
  end

  def test_downcase
    assert_equal('xyz', value.downcase)
  end

  def test_nil
    assert_nil(value)
  end

  def test_empty
    assert_empty(list)
  end

  def test_include
    assert_includes(list, 'xyz')
  end

  def test_raise_error
    assert_raises(NoExperienceError) {employee.hire}
  end

  def test_instance
    assert_instance_of(Numeric, value)
  end

  def test_sublcass
    assert_kind_of(Numeric, value)
  end

  def test_sameobj
    assert_same(list, list.process)
  end

  def test_notinclude
    refute_same(list, 'xyz')
  end
end