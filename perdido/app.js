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

    section: {
      extend: perdido.center('1140px'),
      marginTop: `${blockMar}px`,
      marginBottom: `${blockMar}px`,

      '&:last-of-type': {
        marginBottom: '0',
      },

      // Simple 1/4
      '&:nth-of-type(1)': {
        background: '#42CAFD',
        '& article': {
            background: '#22C1FD',
            extend: perdido.column('1/4'),
        },
      },

      // Offset
      '&:nth-of-type(2)': {
        background: '#66B3BA',
        '& article': {
          background: '#52A9B1',
          extend: perdido.column('1/3'),
          '&:first-child': {
            extend: perdido.offset('1/3')
          }
        }
      },

      // Nesting
      '&:nth-of-type(3)': {
        background: '#8EB19D',
        '& article': {
          extend: perdido.column('1/3'),
          background: '#7BA48D',

          '& article': {
            extend: perdido.column('1/2'),
            background: '#68977C',
          }
        }
      },

      // Alignment
      '&:nth-of-type(4)': {
        extend: perdido.align('center'),
        background: '#F0D2D1',
        height: '300px',
        '& article': {
          extend: perdido.column('1/3'),
          background: '#E5B1AF',
          marginTop: 0,
          marginBottom: 0,
        }
      },

      // Cycle
      '&:nth-of-type(5)': {
        background: '#F19A3E',

        '& article': {
          // extend: perdido.column('1/1'),
          extend: perdido.column('2/8', cycle='4'),
          height: 'auto',
          lineHeight: '25px',
          fontWeight: 'normal',
          padding: `${blockMar / 2}px`,
          background: '#EF8B22'
        }
      },

      // Vertical Grid
      '&:nth-of-type(6)': {
        background: '#1E90FF',

        '& article': {
          extend: perdido.row('1/3'),
          marginTop: 0,
          background: '#0182FF',
          padding: '30px'
        }
      },

      // Waffle Grid
      '&:nth-of-type(7)': {
        background: '#FF6347',

        '& article': {
        background: '#FF4726',
          extend: perdido.waffle('1/3'),
          marginTop: '0',
          lineHeight: 'inherit',
          padding: `${blockMar}px`
        }
      },

      // Varying Sizes
      '&:nth-of-type(8)': {
        background: '#00FF7F',

        '& article': {
          background: '#00E672',

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
        background: '#5F9EA0',

        '& article': {
          background: '#568E90',
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