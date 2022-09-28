# P given a description of meetup date return the actual date
  # description consists of two parts
    #'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'
    #'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' 'Sunday'
    # the description should be case insensitive
# E
  # need a meetup class, it takes the year and month arguments at construct (integers)
  # need a instance method day, takes the two string description, returns a date object
# D collection of description in array
# A nth someday loop through year month date from 1 , count occuracen starting from 0 n += 1 when reaching a desired day break if n == the number of occurance 
require 'Date'
class Meetup
  NTH = {'first' => 1, 'second' => 2, 'third' => 3, 'fourth' => 4, 'fifth' => 5}
  DAY = %w(sunday monday tuesday wednesday thursday friday saturday)

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(wday, which)
    wday = wday.downcase
    which = which.downcase
    if NTH[which]
      nth_wday(NTH[which],wday)
    elsif which == 'teenth'
      teenth_wday(wday)
    else
      last_wday(wday)
    end
  end

  def nth_wday(nth, wday)
    date = 1
    ct = 0
    loop do
      day_of_week = DAY.find_index(wday)
      break if !Date.valid_date?(@year, @month, date)
      current_date = Date.civil(@year, @month, date)
      if current_date.wday == day_of_week
        ct += 1
      end
      return current_date if ct == nth
      date += 1
    end
    nil
  end

  def teenth_wday(wday)
    teens = (13..19).to_a
    day_of_week = DAY.find_index(wday)
    teens.each do |date|
      current_date = Date.civil(@year, @month, date)
      return current_date if current_date.wday == day_of_week
    end
    nil
  end

  def last_wday(wday)
    last_date = Date.new(@year, @month, -1).day
    day_of_week = DAY.find_index(wday)
    last_date.downto(1) do |date|
      current_date = Date.civil(@year, @month, date)

      return current_date if current_date.wday == day_of_week
    end
    nil
  end
end
