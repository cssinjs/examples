(function() {
  var jss = window.jss,
      jssExtend = window.jssExtend,
      jssNested = window.jssNested,
      jssCamelCase = window.jssCamelCase,
      jssDefaultUnit = window.jssDefaultUnit,
      jssVendorPrefixer = window.jssVendorPrefixer,
      Perdido = window.Perdido

  jss.use(jssExtend())
  jss.use(jssNested())
  jss.use(jssCamelCase())
  jss.use(jssDefaultUnit())
  jss.use(jssVendorPrefixer())


  jss.createStyleSheet({
      section: {
          backgroundColor: '#F0F0F0',
          extend: Perdido.utils.clearFix(),
        '& article': {
            extend: Perdido.column('1/3'),
        },
      },
  }, {named: false}).attach()
}())