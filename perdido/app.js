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

  var blockMar = 30;

  jss.createStyleSheet({
    html: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      padding: blockMar,
      height: 'auto'
    },
    article: {
      height: '100px',
      lineHeight: '100px',
      textAlign: 'center',
      marginTop: `${blockMar / 2}px`,
      marginBottom: `${blockMar / 2}px`,

      '& article': {
        marginTop: 0,
        marginBottom: 0,
      }
    },
    section: {
      extend: Perdido.center('1140px'),
      '&:last-of-type': {
        marginBottom: '0',
      },

      // Simple 1/4
      '&:nth-of-type(1)': {
        background: '#42CAFD',
        '& article': {
            background: '#22C1FD',
            extend: Perdido.column('1/4'),
        },
      },

      // Offset
      '&:nth-of-type(2)': {
        background: '#66B3BA',
        '& article': {
          background: '#52A9B1',
          extend: Perdido.column('1/3'),
          '&:first-child': {
            extend: Perdido.offset('1/3')
          }
        }
      },

      // Nesting
      '&:nth-of-type(3)': {
        background: '#8EB19D',
        '& article': {
          extend: Perdido.column('1/3'),
          background: '#7BA48D',

          '& article': {
            extend: Perdido.column('1/2'),
            background: '#68977C',
          }
        }
      },

      // Alignment
      '&:nth-of-type(4)': {
        extend: Perdido.align('center'),
        background: '#F0D2D1',
        height: '300px',
        '& article': {
          extend: Perdido.column('1/3'),
          background: '#E5B1AF',
          marginTop: 0,
          marginBottom: 0,
        }
      }
    },
  }, {named: false}).attach()
}())