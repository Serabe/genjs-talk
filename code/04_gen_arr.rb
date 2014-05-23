def gen_arr arr
  Enumerator.new do |y|
    arr.each do |el|
      y << el
    end
  end.lazy
end

en = gen_arr [1,2,3]

puts en.next
puts en.next
puts en.next