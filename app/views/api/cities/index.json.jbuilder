@cities.each do |city|
    json.set! city.id do
        json.name city.name
        json.state city.state
    end
end
