import { Image, StyleSheet, KeyboardAvoidingView, Platform, View, ScrollView, ImageBackground, Text, TextInput } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button';


type inputItems = {
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required!')
      .email('This is not a valid Email Address'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Password must be at least 8 characters!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Error: Passwords do not match!')
      .required('Confirm password is required'),
    phoneNumber: Yup.string()
        .required('Mobile Number is required')
        .matches(/^\d{10,11}$/, 'Phone Number is invalid! Must be 10 or 11 digits')
  });
  

export default function signUpScreen() {

  

     // Use the useForm hook with TypeScript types
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputItems>({
    resolver: yupResolver(validationSchema),
  });

  // Type the onSubmit function
  const onSubmit: SubmitHandler<inputItems> = (data) => {
    console.log(data);
  };

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}
    >
    <ScrollView contentContainerStyle={styles.contentContainer}>

    <View
    style={styles.fullscreen}>
        <View style={styles.bg}>
            <ImageBackground style={styles.bg}source={require('@/assets/images/background.png')}>
                <ImageBackground style={styles.bg}source={require('@/assets/images/child_bg.png')}>
                    <View style={styles.logoitems}>
                        <Image style={styles.logo} source={require('@/assets/images/logo.png')}/>
                        <Text style={styles.signup}>Sign Up For Free</Text>
                        <Text style={styles.detail}>Quickly make your account in 1 minute</Text>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>

        <View style={styles.formitems}>
                {/* Email Field */}
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Input your Email Address'
                    inlineImageLeft={require('@/assets/images/email_logo.png')}
                    keyboardType="email-address"
                    onChangeText={(text) => setValue('email', text)}
                />
                {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

                {/* Number Field */}
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile number"
                    onChangeText={(text) => setValue('phoneNumber', text )}
                    keyboardType="number-pad"
                />
                {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber.message}</Text>}

                {/* Password Field */}
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    inlineImageLeft={require('@/assets/images/lock_logo.png')}
                    secureTextEntry
                    onChangeText={(text) => setValue('password', text)}
                />
                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

                {/* Confirm Password Field */}
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    inlineImageLeft={require('@/assets/images/lock_logo.png')}
                    secureTextEntry
                    onChangeText={(text) => setValue('confirmPassword', text)}
                />
                {errors.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword.message}</Text>
                )}

                
        </View>
        {/* Submit Button */}
        <Button
            title='Continue' onPress={handleSubmit(onSubmit)}/>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    label: {
      marginTop: 18,
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
      
    },
    input: {
      borderRadius: 19,
      height: 56,
      padding: 15,
      fontSize: 18,
      backgroundColor: '#24262B',
      color: '#D7D8D9',
      marginTop: 10,
      fontWeight: '700'
    },
    error: {
      color: '#e53e3e',
      fontSize: 14,
      marginTop: 5,
    },
    logoitems: {
      alignItems: 'center',
      paddingVertical: 60,
      marginTop: 80
    },
    logo: {
      height: 48,
      width: 48
    },
    signup: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff',
      marginTop: 16
    },
    detail: {
      fontSize: 16,
      color: '#ffffff',
      marginTop: 8
    },
    bg: {
      height: 'auto',

    },
    formitems: {
      marginHorizontal: 10,
      marginTop: 5,
      marginBottom: 20
    },
    fullscreen: {
      backgroundColor: '#111214',
      flex: 1
    },
    keyboard: {
      flex: 1
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    }
  });