import elevation, { cssElevation, cssElevationObject } from '../src'
describe('elevation', () => {
  it('z = 0', () => {
    expect(elevation({ z: 0 })).toBe(
      '0px 0px 0px 0px rgba(0,0,0,.2), 0px 0px 0px 0px rgba(0,0,0,.14), 0px 0px 0px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 1', () => {
    expect(elevation({ z: 1 })).toBe(
      '0px 2px 1px -1px rgba(0,0,0,.2), 0px 1px 1px 0px rgba(0,0,0,.14), 0px 1px 3px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 2', () => {
    expect(elevation({ z: 2 })).toBe(
      '0px 3px 1px -2px rgba(0,0,0,.2), 0px 2px 2px 0px rgba(0,0,0,.14), 0px 1px 5px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 3', () => {
    expect(elevation({ z: 3 })).toBe(
      '0px 3px 3px -2px rgba(0,0,0,.2), 0px 3px 4px 0px rgba(0,0,0,.14), 0px 1px 8px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 4', () => {
    expect(elevation({ z: 4 })).toBe(
      '0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,.14), 0px 1px 10px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 5', () => {
    expect(elevation({ z: 5 })).toBe(
      '0px 3px 5px -1px rgba(0,0,0,.2), 0px 5px 8px 0px rgba(0,0,0,.14), 0px 1px 14px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 6', () => {
    expect(elevation({ z: 6 })).toBe(
      '0px 3px 5px -1px rgba(0,0,0,.2), 0px 6px 10px 0px rgba(0,0,0,.14), 0px 1px 18px 0px rgba(0,0,0,.12)'
    )
  })
  it('z = 7', () => {
    expect(elevation({ z: 7 })).toBe(
      '0px 4px 5px -2px rgba(0,0,0,.2), 0px 7px 10px 1px rgba(0,0,0,.14), 0px 2px 16px 1px rgba(0,0,0,.12)'
    )
  })
  it('z = 8', () => {
    expect(elevation({ z: 8 })).toBe(
      '0px 5px 5px -3px rgba(0,0,0,.2), 0px 8px 10px 1px rgba(0,0,0,.14), 0px 3px 14px 2px rgba(0,0,0,.12)'
    )
  })
  it('z = 9', () => {
    expect(elevation({ z: 9 })).toBe(
      '0px 5px 6px -3px rgba(0,0,0,.2), 0px 9px 12px 1px rgba(0,0,0,.14), 0px 3px 16px 2px rgba(0,0,0,.12)'
    )
  })
  it('z = 10', () => {
    expect(elevation({ z: 10 })).toBe(
      '0px 6px 6px -3px rgba(0,0,0,.2), 0px 10px 14px 1px rgba(0,0,0,.14), 0px 4px 18px 3px rgba(0,0,0,.12)'
    )
  })
  it('z = 11', () => {
    expect(elevation({ z: 11 })).toBe(
      '0px 6px 7px -4px rgba(0,0,0,.2), 0px 11px 15px 1px rgba(0,0,0,.14), 0px 4px 20px 3px rgba(0,0,0,.12)'
    )
  })
  it('z = 12', () => {
    expect(elevation({ z: 12 })).toBe(
      '0px 7px 8px -4px rgba(0,0,0,.2), 0px 12px 17px 2px rgba(0,0,0,.14), 0px 5px 22px 4px rgba(0,0,0,.12)'
    )
  })
  it('z = 13', () => {
    expect(elevation({ z: 13 })).toBe(
      '0px 7px 8px -4px rgba(0,0,0,.2), 0px 13px 19px 2px rgba(0,0,0,.14), 0px 5px 24px 4px rgba(0,0,0,.12)'
    )
  })
  it('z = 14', () => {
    expect(elevation({ z: 14 })).toBe(
      '0px 7px 9px -4px rgba(0,0,0,.2), 0px 14px 21px 2px rgba(0,0,0,.14), 0px 5px 26px 4px rgba(0,0,0,.12)'
    )
  })
  it('z = 15', () => {
    expect(elevation({ z: 15 })).toBe(
      '0px 8px 9px -5px rgba(0,0,0,.2), 0px 15px 22px 2px rgba(0,0,0,.14), 0px 6px 28px 5px rgba(0,0,0,.12)'
    )
  })
  it('z = 16', () => {
    expect(elevation({ z: 16 })).toBe(
      '0px 8px 10px -5px rgba(0,0,0,.2), 0px 16px 24px 2px rgba(0,0,0,.14), 0px 6px 30px 5px rgba(0,0,0,.12)'
    )
  })
  it('z = 17', () => {
    expect(elevation({ z: 17 })).toBe(
      '0px 8px 11px -5px rgba(0,0,0,.2), 0px 17px 26px 2px rgba(0,0,0,.14), 0px 6px 32px 5px rgba(0,0,0,.12)'
    )
  })
  it('z = 18', () => {
    expect(elevation({ z: 18 })).toBe(
      '0px 9px 11px -5px rgba(0,0,0,.2), 0px 18px 28px 2px rgba(0,0,0,.14), 0px 7px 34px 6px rgba(0,0,0,.12)'
    )
  })
  it('z = 19', () => {
    expect(elevation({ z: 19 })).toBe(
      '0px 9px 12px -6px rgba(0,0,0,.2), 0px 19px 29px 2px rgba(0,0,0,.14), 0px 7px 36px 6px rgba(0,0,0,.12)'
    )
  })
  it('z = 20', () => {
    expect(elevation({ z: 20 })).toBe(
      '0px 10px 13px -6px rgba(0,0,0,.2), 0px 20px 31px 3px rgba(0,0,0,.14), 0px 8px 38px 7px rgba(0,0,0,.12)'
    )
  })
  it('z = 21', () => {
    expect(elevation({ z: 21 })).toBe(
      '0px 10px 13px -6px rgba(0,0,0,.2), 0px 21px 33px 3px rgba(0,0,0,.14), 0px 8px 40px 7px rgba(0,0,0,.12)'
    )
  })
  it('z = 22', () => {
    expect(elevation({ z: 22 })).toBe(
      '0px 10px 14px -6px rgba(0,0,0,.2), 0px 22px 35px 3px rgba(0,0,0,.14), 0px 8px 42px 7px rgba(0,0,0,.12)'
    )
  })
  it('z = 23', () => {
    expect(elevation({ z: 23 })).toBe(
      '0px 11px 14px -7px rgba(0,0,0,.2), 0px 23px 36px 3px rgba(0,0,0,.14), 0px 9px 44px 8px rgba(0,0,0,.12)'
    )
  })
  it('z = 24', () => {
    expect(elevation({ z: 24 })).toBe(
      '0px 11px 15px -7px rgba(0,0,0,.2), 0px 24px 38px 3px rgba(0,0,0,.14), 0px 9px 46px 8px rgba(0,0,0,.12)'
    )
  })
  it('should match different colors', () => {
    expect(elevation({ z: 24, r: 60, g: 60, b: 60 })).toBe(
      '0px 11px 15px -7px rgba(60,60,60,.2), 0px 24px 38px 3px rgba(60,60,60,.14), 0px 9px 46px 8px rgba(60,60,60,.12)'
    )
  })

  it('should throw error if Z < 0', () => {
    expect(() => {
      elevation({ z: -1 })
    }).toThrowError('"z" must be between 0 and 24')
  })
  it('should throw error if Z > 24', () => {
    expect(() => {
      elevation({ z: 25 })
    }).toThrowError('"z" must be between 0 and 24')
  })

  it('should throw error if r < 0', () => {
    expect(() => {
      elevation({ r: -1 })
    }).toThrowError('"r" must be between 0 and 255')
  })
  it('should throw error if r > 255', () => {
    expect(() => {
      elevation({ r: 256 })
    }).toThrowError('"r" must be between 0 and 255')
  })

  it('should throw error if g < 0', () => {
    expect(() => {
      elevation({ g: -1 })
    }).toThrowError('"g" must be between 0 and 255')
  })
  it('should throw error if g > 255', () => {
    expect(() => {
      elevation({ g: 256 })
    }).toThrowError('"g" must be between 0 and 255')
  })

  it('should throw error if b < 0', () => {
    expect(() => {
      elevation({ b: -1 })
    }).toThrowError('"b" must be between 0 and 255')
  })
  it('should throw error if b > 255', () => {
    expect(() => {
      elevation({ b: 256 })
    }).toThrowError('"b" must be between 0 and 255')
  })
})

describe('cssElevation', () => {
  it('should return box-shodow with CSS', () => {
    expect(cssElevation({ z: 8 })).toMatch(/box-shadow/)
  })
})
describe('cssElevationObject', () => {
  it('should return box-shodow with CSS', () => {
    expect(cssElevationObject({ z: 8 })).toHaveProperty('boxShadow')
  })
})
