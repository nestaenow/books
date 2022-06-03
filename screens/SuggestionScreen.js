import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';

function SuggestionScreen(props) {
  const formTemplate = {
    data: [
      
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Name',
          placeholder: 'Enter name..'
        }
      },
      {
        component: 'input-text',
        field_name: 'message',
        is_mandatory: 'true',
        max_lines:10,
        meta: {
          label: 'Your suggestions',
          placeholder: 'Please enter your suggestions'
          
        }
      },
      {
        component: 'input-radio',
        field_name: 'contact',
        is_mandatory: 'true',
        meta: {
          text: 'How will you like to hear from us',
          data: [
            {
              label: 'email',
              value: 'email'
            },
            {
              label: 'phone',
              value: 'phone'
            }
          ]
        }
      }
    ]
  }

  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log('Form submitted with fields: ', formFields);
  }

  return (
    <View style={styles.container}>
        
        <Image style={styles.image} source = {require('../assets/suggestions.jpg')} ></Image>
      <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {

    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default SuggestionScreen;