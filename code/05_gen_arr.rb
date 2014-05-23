def gen_arr arr
  arr.each.lazy
end

en = gen_arr [1,2,3]

puts en.next
puts en.next
puts en.next