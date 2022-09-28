require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'
require 'pry'

class CashRegisterTest < MiniTest::Test

  def setup
    @transaction = Transaction.new(50)
    @cashregister = CashRegister.new(100)
  end

  # def test_accept_money
  #   @transaction.amount_paid = 45
  #   before_amount = @cashregister.total_money
  #   @cashregister.accept_money(@transaction)
  #   after_amount = @cashregister.total_money
  #   assert_equal(before_amount + 45, after_amount)
  # end

  # def test_change
  #   @transaction.amount_paid = 60
  #   result = @cashregister.change(@transaction)
  #   assert_equal(10, result)
  # end

  # def test_give_receipt
  #   assert_output("You've paid $50.\n") { @cashregister.give_receipt(@transaction) }
  # end

  def test_prompt_for_payment
    input = StringIO.new("50\n")
    output = StringIO.new
    correct_output = <<-HEREDOC
You owe $50.
How much are you paying?
    HEREDOC

    assert_output(correct_output){@transaction.prompt_for_payment(input: input)}
    assert_equal(50, @transaction.amount_paid)


    input2 = StringIO.new("40\n" + "50\n")
    output2 = StringIO.new
    correct_output2 = <<-HEREDOC
You owe $50.
How much are you paying?
That is not the correct amount. Please make sure to pay the full cost.
You owe $50.
How much are you paying?
    HEREDOC
    # binding.pry

    assert_output(correct_output2){ @transaction.prompt_for_payment(input: input2)}
    assert_equal(50, @transaction.amount_paid)
  end
end