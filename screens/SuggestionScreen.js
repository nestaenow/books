import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/core'

function SuggestionScreen(props) {
  const navigation = useNavigation()
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
    <SafeAreaView>
      <ScrollView>
        <BackButton onPress={() => navigation.goBack()} color='#6B3F87'/>
        <View style={styles.container}>
          <Text style={styles.header}>Suggestions</Text>
          <Image style={styles.image} source = {require('../assets/suggestions.jpg')} ></Image>
          <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginHorizontal: 20,
  },
  image: {
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#6B3F87',
    marginTop: 10,
    marginBottom: 12
  },
});

export default SuggestionScreen;