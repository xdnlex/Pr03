class Board {
 
  constructor(state, next = 1, degree = 0) {
    this.state = Array.from(state)
    this.next = next
    this.degree = degree
    this.win1 = 0.5 
    this.win2 = 0.5
    this.ret = 0 
  }
 
  isWin(num) {
    let sub = Array.from(Array(3)).fill('' + num).join('')
    
    let str = ''
    for (let i = 0; i < 3; i++) {
      str += [this.state[i * 3], this.state[i * 3 + 1], this.state[i * 3 + 2]].join('') + '-'
    }

    for (let i = 0; i < 3; i++) {
      str += [this.state[i], this.state[i + 3], this.state[i + 6]].join('') + '-'
    }
 
    str += [this.state[0], this.state[4], this.state[8]].join('')
    str += '-'
    str += [this.state[2], this.state[4], this.state[6]].join('')
 
    return str.indexOf(sub) != -1
  }
 
  getWiner() {
    if (this.isWin(1))
      return 1
    if (this.isWin(2))
      return 2
    return 0
  }
 
  getWinP() {
    return this['win' + this.next]
  }
 
  toString() {
    return '' + this.next + '-' + this.state.join('')
  }
 
  show() {
    for (let i = 0; i < 3; i++) {
      console.log(this.state[i * 3], this.state[i * 3 + 1], this.state[i * 3 + 2])
    }
    console.log({
      next: this.next,
      degree: this.degree,
      win1: this.win1,
      win2: this.win2,
      winer: this.getWiner(),
      ret: this.ret
    })
 
  }
}
 
 
export {
  Board
}