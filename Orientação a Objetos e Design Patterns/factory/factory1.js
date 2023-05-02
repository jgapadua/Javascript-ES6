/* não é Factory
function FakeUser() {
    this.name: 'João';
    this.lastName: 'Pádua';
}

const user = new FakeUser();
*/

// Factory
function FakeUser() {
  return {
      name: 'João',
      lastName: 'Pádua'
  }
}

const user = FakeUser();