@cities.each do |city|
    json.set! city.id do
        json.id city.id
        json.name city.name
        json.state city.state
    end
end
