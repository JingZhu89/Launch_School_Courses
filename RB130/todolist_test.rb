require 'simplecov'
SimpleCov.start
require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'todolist'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end
  # Your tests go here. Remember they must start with "test_"

  def test_first
    assert_same(@todo1, @list.first)
  end

  def test_last
    assert_same(@todo3, @list.last)
  end

  def test_shift
    assert_same(@todos.shift, @list.shift)
    assert_equal(@todos, @list.to_a)
  end

  def test_pop
    assert_same(@todos.pop, @list.pop)
    assert_equal(@todos, @list.to_a)
  end

  def test_done?
    assert_equal(false, @list.done?)
  end

  def test_raise_add_nontodo
    assert_raises(TypeError) do
      @list.add(1)
    end
  end

  def test_add_alias
    @todo4 = Todo.new('feed chewy')
    @todos << @todo4
    @list << @todo4
    assert_equal(@todos, @list.to_a)
  end

  def test_add
    @todo5 = Todo.new('walk bobo')
    @todos << @todo5
    @list.add(@todo5)
    assert_equal(@todos, @list.to_a)
  end

  def test_item_at
    assert_raises(IndexError) {@list.item_at(100)}
    assert_equal(@todos[0], @list.item_at(0))
    assert_equal(@todos[1], @list.item_at(1))
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def mark_done_at
    assert_raises(IndexError) {@list.mark_done_at(100)}
    @list.mark_done_at(2)
    assert_equal(true, @todo3.done?)
    assert_equal(false, @todo2.done?)
  end

  def mark_done_at
    assert_raises(IndexError) {@list.mark_undone_at(100)}
    @todo3.done!
    @todo2.done!
    @todo1.done!
    @list.mark_undone_at(2)
    assert_equal(false, @todo3.done?)
  end

  def done!
    @list.done!
    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(true, @todo3.done?)
    assert_equal(true, @list.done?)
  end

  def remove_at
    assert_raises(IndexError) {@list.remove_at(100)}
    removed = @list.remove_at(2)
    assert_equal(@todo3, removed)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_to_s
    output = <<~OUTPUT.chomp
    ---Today's Todos---
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_first_done
    @list.mark_done_at(0)
    output = <<~OUTPUT.chomp
    ---Today's Todos---
    [X] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_all_not_done
    not_done = @list.all_not_done
    assert_equal(@todos, not_done.to_a)
    assert_equal(@list.title, not_done.title)
  end

  def test_all_done
    @todo1.done!
    done = @list.all_done
    assert_equal([@todo1], done.to_a)
    assert_equal(@list.title, done.title)
  end

  def test_to_all__not_done
    @list.done!
    output = <<~OUTPUT.chomp
    ---Today's Todos---
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_each
    test_list = (@list.each {|todo| todo.done!})
    assert_equal(true, @list.done?)
    assert_equal(test_list, @list)
  end

  def test_select
    @todo1.done!
    selected = (@list.select{|todo| todo.done?})
    assert_instance_of(TodoList, selected)
    assert_equal([@todo1], selected.to_a)
    assert_equal(@list.title, selected.title)
  end
end
