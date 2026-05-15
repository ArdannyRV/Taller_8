module.exports = function (api) {
    api.cahe(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            ["module-resolver", { root: ["./src"], alias: { "@": "./src" } }],
        ],};
};