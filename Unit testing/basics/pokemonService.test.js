const { getPokemon } = require("./pokemonService")



it("Returns pokemon data", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve({
          id: 25,
          name: "pikachu"
        })
      }
    })
  })

  const pokemon = await getPokemon(25);

  expect(pokemon.name).toBe("pikachu");

})