module.exports = function () {
    return function ({ addVariant }) {
        addVariant('empty', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.empty${separator}${className}:empty`
            })
        })
    }
}
