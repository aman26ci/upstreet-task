import {constants} from "../../src/utils/constants";

const testCases = [
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'James',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '2020-01-01'
        },
        message: 'should pass with valid data'
    },
    {
        testCase: {
            birthDate: '200-01-01',
            givenName: 'James',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '2020-01-01'
        },
        message: 'birthdate format must be YYYY-MM-DD'
    },
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'Jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '2020-01-01'
        },
        message: 'givenName length must be Max 100 characters'
    },
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'John',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '2020-01-01'
        },
        message: 'givenName length must be Max 100 characters'
    },
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'John',
            familyName: 'Jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '2020-01-01'
        },
        message: 'familyName length must be Max 100 characters'
    },
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'John',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'Punjab', //acppeted states 
            expiryDate: '2020-01-01'
        },
        message: `stateOfIssue must be from ${constants.DLAcceptedStates}`
    },
    {
        testCase: {
            birthDate: '2001-01-01',
            givenName: 'James',
            familyName: 'Robert',
            licenceNumber: '94977000',
            stateOfIssue: 'NSW',
            expiryDate: '202-01-01'
        },
        message: 'expiryDate format must be YYYY-MM-DD'
    },
];

export { testCases };
