// console.log('Server Started on port', 3000);
// console.log('Request received:', true, 'Items in queue',5);

// const userAge =28;
// console.log('userAge:', userAge);

// const userProfile={
//     name: 'Raj',
//     role:'admin',
//     isActive: true
// }

// console.log('userProfile:',userProfile);

// const allowedRoles=['admin','editor','viewer'];
// console.log('allowedRoles:', allowedRoles );

// console.warn('Warning: Database connection is slow');
// console.error('Error: Could not');

const users=[
    {id: 1, name:'Raj',role:'admin'},
    {id: 2, name:'Priya',role:'editor'},
    {id: 3, name:'Arjun', role:'Viewer'}
];

console.log('Plain log', users);
console.table(users);