// Simple 4-level hierarchy
const simpleHierarchy = {
  id: "39",
  name: "39",
  clasify: "A",
  children: [
    {
      id: "75",
      name: "75",

      clasify: "B",
      children: [],
    },
    {
      id: "69",
      name: "69",
      clasify: "C",
      children: [{ id: "80", name: "80", clasify: "B" }],
    },
    {
      id: "73",
      name: "73",
      clasify: "D",
      children: [
        {
          id: "74",
          name: "74",
          mod: true,
          clasify: "E",
          children: [
            { id: "77", name: "77", clasify: "A" },
            {
              id: "91",
              name: "91",
              children: [
                {
                  id: "93",
                  name: "93",
                  clasify: "B",
                  children: [],
                },
                { id: "f07", name: "f07", mod: true, clasify: "C" },
              ],
            },
            { id: "f06", clasify: "D", name: "f06" },
          ],
        },
      ],
    },
    {
      id: "38",
      clasify: "E",
      name: "38",
      children: [
        { id: "65", clasify: "A", name: "65" },
        { id: "f08", name: "f08", clasify: "A" },
        {
          id: "84",
          name: "84",
          clasify: "C",
          children: [
            {
              id: "74",
              name: "74",
              clasify: "S",
              children: [
                { id: "77", name: "77", clasify: "C" },
                {
                  id: "91",
                  name: "91",
                  children: [
                    { id: "93", name: "93", clasify: "B" },
                    { id: "f07", name: "f07", mod: true, clasify: "C" },
                  ],
                },
                { id: "f06", name: "f06", clasify: "D" },
              ],
            },
          ],
        },

        { id: "91", name: "91", clasify: "A" },
        { id: "92", name: "92", clasify: "D" },
      ],
    },
  ],
};
