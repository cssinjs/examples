(function() {
  var jss = window.jss,
      jssExtend = window.jssExtend,
      jssNested = window.jssNested,
      jssCamelCase = window.jssCamelCase,
      jssDefaultUnit = window.jssDefaultUnit,
      jssVendorPrefixer = window.jssVendorPrefixer,
      jssPropsSort = window.jssPropsSort,
      perdido = window.perdido

  jss.use(jssExtend())
  jss.use(jssNested())
  jss.use(jssCamelCase())
  jss.use(jssDefaultUnit())
  jss.use(jssVendorPrefixer())
  jss.use(jssPropsSort())

  var blockMar = 30;

  jss.createStyleSheet({
    // Reset code
    '*, *:after, *:before': {
      boxSizing: 'border-box',
      padding: '0',
      margin: '0'
    },

    html: {
      fontWeight: 'bold',
      color: '#FFFFFF',
      padding: `${blockMar}px`,
      height: 'auto',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },

    body: {
      width: '100%',
      overflowX: 'hidden',
      margin: '0',
      '*zoom': '1',

      '&:after, :before': {
        content: '""',
        display: 'table',
      },

      '&:after': {
        clear: 'both'
      }
    },

    header: {
      textAlign: 'center',
      margin: '30px 0 60px'
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

    // Grid examples

    section: {
      extend: perdido.center('1140px'),
      marginTop: `${blockMar}px`,
      marginBottom: `${blockMar}px`,

      '&:last-of-type': {
        marginBottom: '0',
      },

      // Simple 1/4
      '&:nth-of-type(1)': {
        background: '#FD7442',
        '& article': {
            background: '#FD5C22',
            extend: perdido.column('1/4'),
        },
      },

      // Offset
      '&:nth-of-type(2)': {
        background: '#BA6D66',
        '& article': {
          background: '#B15A52',
          extend: perdido.column('1/3'),
          '&:first-child': {
            extend: perdido.offset('1/3')
          }
        }
      },

      // Nesting
      '&:nth-of-type(3)': {
        background: '#B18EA2',
        '& article': {
          extend: perdido.column('1/3'),
          background: '#A47B92',

          '& article': {
            extend: perdido.column('1/2'),
            background: '#976883',
          }
        }
      },

      // Alignment
      '&:nth-of-type(4)': {
        extend: perdido.align('center'),
        background: '#D1EFF0',
        height: '300px',
        '& article': {
          extend: perdido.column('1/3'),
          background: '#AFE3E5',
          marginTop: 0,
          marginBottom: 0,
        }
      },

      // Cycle
      '&:nth-of-type(5)': {
        background: '#3E95F1',

        '& article': {
          extend: perdido.column('2/8', cycle=4),
          height: 'auto',
          lineHeight: '25px',
          fontWeight: 'normal',
          padding: `${blockMar / 2}px`,
          background: '#2285ef'
        }
      },

      // Vertical Grid
      '&:nth-of-type(6)': {
        background: '#FF8F1E',

        '& article': {
          extend: perdido.row('1/3'),
          marginTop: 0,
          background: '#FF8001',
          padding: '30px'
        }
      },

      // Waffle Grid
      '&:nth-of-type(7)': {
        background: '#47E3FF',

        '& article': {
        background: '#26DEFF',
          extend: perdido.waffle('1/3'),
          marginTop: '0',
          lineHeight: 'inherit',
          padding: `${blockMar}px`
        }
      },

      // Varying Sizes
      '&:nth-of-type(8)': {
        background: '#FF0080',

        '& article': {
          background: '#E60073',

          '&:first-child': {
            extend: perdido.column('1/3')
          },
          '&:last-child': {
            extend: perdido.column('2/3')
          }
        }
      },

      // Source Ordering
      '&:nth-of-type(9)': {
        background: '#A0615F',

        '& article': {
          background: '#905856',
          extend: perdido.column('1/2'),

          '&:first-child': {
            extend: perdido.move('1/2')
          },
          '&:last-child': {
            extend: perdido.move('-1/2')
          }
        }
      }
    },

    // '@media (min-width: 500px)': {
    //   'section:nth-of-type(5) article': {
    //     extend: perdido.column('2/4', cycle='2')
    //   }
    // },

    // '@media (min-width: 800px)': {
    //   'section:nth-of-type(5) article': {
    //     extend: perdido.column('2/6', cycle='3')
    //   }
    // },

    // '@media (min-width: 1100px)': {
    //   'section:nth-of-type(5) article': {
    //     extend: perdido.column('2/8', cycle='4')
    //   }
    // }
  }, {named: false}).attach()
}())