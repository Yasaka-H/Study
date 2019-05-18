require 'net/http'
require 'uri'
require 'json'

puts
yw = ARGV[0]
printf('Your weapon is "%s" ', yw)
puts

uri = URI.parse('http://3.112.251.137:20020/fight')
data = Net::HTTP.get(uri)
data = JSON.parse(data)

sw = data['weapon']
printf('Server weapon is "%s"', sw)
puts
puts

if yw == sw then puts 'DRAW'
elsif yw == 'rock' then
    if sw == 'paper' then puts 'YOU LOSE!'
    elsif sw == 'scissers' then puts 'YOU WIN!'
    end
elsif yw == 'paper' then
    if sw == 'scissers' then puts 'YOU LOSE!'
    elsif sw == 'rock' then puts 'YOU WIN!'
    end
elsif yw == 'scissers' then 
    if sw == 'rock' then puts 'YOU LOSE!'
    elsif sw == 'paper' then puts 'YOU WIN!'
    end
else puts 'false'
end
