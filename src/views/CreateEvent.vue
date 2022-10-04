<template>
<div id="app">
  <v-app id="inspire">
    <v-stepper v-model="e1" v-if="!isStepHidden">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Information about You</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step :complete="e1 > 2" step="2">About the People</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step step="3">The Event</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <form data-vv-scope="form1">
              <v-row>

                <v-col>
                    <v-alert
                    icon="account_circle"
                    type="info"
                    
                    text
                    >
                    CONTACT INFO
                    </v-alert>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                    <v-text-field 
                    v-model="Contact_FirstName" label="First Name" 
                    
                    :error-messages="errors.collect('Contact_FirstName')" 
                    v-validate="'required'" 
                    data-vv-name="Contact_FirstName" required data-vv-scope="form1"
                    data-vv-as = 'First Name'>
                </v-text-field>
                </v-col>
                
                <v-col cols="3">
                    <v-text-field 
                    v-model="Contact_LastName" label="Last Name" 
                    
                    :error-messages="errors.collect('Contact_LastName')" 
                    v-validate="'required'" 
                    data-vv-name="Contact_LastName" required data-vv-scope="form1"
                    data-vv-as = 'Last Name'>
                </v-text-field>

                </v-col>
              </v-row>
            
              <v-row>
                  <v-col cols="3">
                    <v-text-field 
                        v-model="Contact_Email" label="Email" 
                        :error-messages="errors.collect('Contact_Email')" 
                        v-validate="'required|email'" 
                        data-vv-name="Contact_Email" required data-vv-scope="form1"
                        data-vv-as = 'Contact Email'>
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                      <v-text-field 
                        v-model="Contact_Phone" label="Contact Number" 
                        :error-messages="errors.collect('Contact_Phone')" 
                        v-validate="'required'" 
                        data-vv-name="Contact_Phone" required data-vv-scope="form1"
                        data-vv-as = 'Contact Phone'>
                      </v-text-field>
                  </v-col>
              </v-row>

              <v-row>

                  <v-col>
                      <v-alert
                      icon="card_travel"
                      type="info"
                      text
                      >
                      COMPANY INFO
                      </v-alert>
                  </v-col>
              </v-row>

              <v-row>
                  <v-col cols="3">
                    <v-text-field 
                        v-model="Proposed_Company_Name_I" label="Proposed Event Name" 
                        :error-messages="errors.collect('Proposed_Event_Name_I')" 
                        v-validate="'required'" 
                        data-vv-name="Proposed_Event_Name_I" required data-vv-scope="form1"
                        data-vv-as = 'Proposed Event Name'>
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">

                      <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="Financial_Year_End"
                          label="Financial Year End"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                          :error-messages="errors.collect('Financial_Year_End')" 
                          v-validate="'required'" 
                          data-vv-name="Financial_Year_End" 
                          required 
                          data-vv-scope="form1"
                          :value="computedDateFormattedMomentjs"
                          data-vv-as = 'Financial Year End'
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="Financial_Year_End" @input="menu2 = false"></v-date-picker>
                    </v-menu>

                      <!-- <v-text-field 
                      v-model="Financial_Year_End" label="Financial Year End" 
                      :error-messages="errors.collect('Financial_Year_End')" 
                      v-validate="'required'" 
                      data-vv-name="Financial_Year_End" 
                      required 
                      data-vv-scope="form1"
                      prepend-icon="date_range"
                      :value="Financial_Year_End"
                      slot="activator"> -->
                      <!-- <v-menu>
                      <v-text-field 
                        v-model="Financial_Year_End" label="Financial Year End" 
                        :error-messages="errors.collect('Financial_Year_End')" 
                        v-validate="'required'" 
                        data-vv-name="Financial_Year_End" 
                        required 
                        data-vv-scope="form1"
                        prepend-icon="date_range"
                        :value="Financial_Year_End"
                        slot="activator">
                        
                      </v-text-field>
                      <v-date-picker v-model="Financial_Year_End"></v-date-picker>
                    </v-menu> -->
                  </v-col>
              </v-row>

              <v-row>
                  <v-col cols="3">

                     <v-text-field 
                        v-model="Principal_Business_Activity_I" label="Principal Business Activity I" 
                        :error-messages="errors.collect('Principal_Business_Activity_I')" 
                        v-validate="'required'" 
                        data-vv-name="Principal_Business_Activity_I" required data-vv-scope="form2"
                        data-vv-as = 'Principal Business Activity I'>
                      </v-text-field>
                    
                  </v-col>
                  <v-col cols="3">
                      <v-text-field 
                        v-model="Principal_Business_Activity_II" label="Principal Business Activity II" 
                        :error-messages="errors.collect('Principal_Business_Activity_II')" 
                        v-validate="'required'" 
                        data-vv-name="Principal_Business_Activity_II" required data-vv-scope="form2"
                        data-vv-as = 'Principal Business Activity II'>
                      </v-text-field>
                  </v-col>
              </v-row>

              <v-row>
                  <v-col cols="3">

                      <v-select
                      :items="currency_options"
                      
                      v-model="Paid_Up_Capital_Currency" label="Paid Up Capital Currency" 
                        :error-messages="errors.collect('Paid_Up_Capital_Currency')" 
                        v-validate="'required'" 
                        data-vv-name="Paid_Up_Capital_Currency" required data-vv-scope="form1"
                        data-vv-as = 'Paid Up Capital Currency'
                      >
                      </v-select>
                    
                  </v-col>
                  <v-col cols="3">
                      <v-text-field 
                        v-model="Paid_Up_Capital_Amount" label="Paid Up Capital Amount" 
                        :error-messages="errors.collect('Paid_Up_Capital_Amount')" 
                        v-validate="'required'" 
                        data-vv-name="Paid_Up_Capital_Amount" required data-vv-scope="form1"
                        data-vv-as = 'Paid Up Capital Amount'>
                      </v-text-field>
                  </v-col>
              </v-row>
            
              
              <v-row>
                  <v-col cols="3">

                     <v-text-field 
                        v-model="Total_Number_of_Shares" label="Total Number of Shares" 
                        :error-messages="errors.collect('Total_Number_of_Shares')" 
                        v-validate="'required'" 
                        data-vv-name="Total_Number_of_Shares" required data-vv-scope="form2"
                        data-vv-as = 'Total Number of Shares'>
                      </v-text-field>
                    
                  </v-col>
                  <v-col cols="3">
                      <v-text-field 
                        v-model="Registered_Office_Address" label="Registered Office Address" 
                        :error-messages="errors.collect('Registered_Office_Address')" 
                        v-validate="'required'" 
                        data-vv-name="Registered_Office_Address" required data-vv-scope="form2"
                        data-vv-as = 'Registered Office Address'>
                      </v-text-field>
                  </v-col>
              </v-row>
    
            <v-btn
              color="primary"
              @click.native="stepContinue('form1')"
              :disabled="errors.any()"
            >
            <v-icon left>skip_next</v-icon>
              Continue
            </v-btn>
          </form>
          
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <form data-vv-scope="form2">
            
            <div v-for="(director, index) in directors">
              <v-row>
      
                  <v-col>
                      <v-alert
                      icon="person"
                      type="info"
                      
                      text
                      >
                      Director {{index + 1}}
                      </v-alert>
                  </v-col>
              </v-row>
      
              
              <v-row>
                  <v-col cols="3">
                    <v-text-field 
                        v-model="directors[index].Name" label="Name" 
                        :error-messages="errors.collect(`directors_${index}_Name`)" 
                        v-validate="'required'" 
                        :data-vv-name="`directors_${index}_Name`" 
                        data-vv-as = 'Name'
                        required 
                        data-vv-scope="form2"
                        name="directors[][Name]"
                        >
                      </v-text-field>
                    </v-text-field>
                  </v-col>
                  <v-col cols="3" v-if="isCorpShow">
                      
                      <v-text-field 
                        v-model="directors[index].ID" label="Registration Number" 
                        :error-messages="errors.collect(`directors_${index}_ID`)" 
                        v-validate="'required'" 
                        data-vv-as = 'Registration Number'
                        :data-vv-name="`directors_${index}_ID`" required data-vv-scope="form2"
                        name="directors[][ID]">
                      </v-text-field>
                  </v-col>
      
                  <v-col cols="3">
                      <v-text-field 
                        v-model="directors[index].ID" label="ID" 
                        :error-messages="errors.collect(`directors_${index}_ID`)" 
                        v-validate="'required'" 
                        data-vv-as = 'ID'
                        :data-vv-name="`directors_${index}_ID`" required data-vv-scope="form2"
                        name="directors[][ID]">
                      </v-text-field>
                  </v-col>
                  
      
                  
                  <v-col cols="3">
                      <v-menu
                      v-model="directors[index].Menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="directors[index].DOB"
                          label="DOB"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                          :error-messages="errors.collect(`directors_${index}_DOB`)" 
                          v-validate="'required'" 
                          :data-vv-name="`directors_${index}_DOB`" 
                          data-vv-as = 'DOB'
                          required 
                          data-vv-scope="form2"
                          
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="directors[index].DOB" @input="directors[index].Menu = false"></v-date-picker>
                    </v-menu>
                  </v-col>
      
                  
                  <v-col cols="3">
                      <v-select
                        :items="nationality_options"
                        name="directors[][Nationality]"
                        v-model="directors[index].Nationality" 
                        label="Nationality" 
                        :error-messages="errors.collect(`directors_${index}_Nationality`)" 
                        v-validate="'required'" 
                        :data-vv-name="`directors_${index}_Nationality`"  
                        data-vv-as = 'Nationality'
                        data-vv-scope="form2"
                        >
                      </v-select>    
                  </v-col>
      
              </v-row>
              
              <v-row>
                  <v-col cols="3">
                    <v-text-field 
                        v-model="directors[index].Email" label="Email" 
                        :error-messages="errors.collect(`directors_${index}_Email`)" 
                        v-validate="'required|email'" 
                        :data-vv-name="`directors_${index}_Email`" 
                        data-vv-as = 'Email'
                        required 
                        data-vv-scope="form2"
                        name="directors[][Email]">
                    </v-text-field>
                  </v-col>
                  <v-col cols="3">
                      <v-text-field 
                        v-model="directors[index].Phone" label="Contact Number" 
                        :error-messages="errors.collect(`directors_${index}_Phone`)" 
                        v-validate="'required'" 
                        :data-vv-name="`directors_${index}_Phone`" 
                        data-vv-as = 'Contact Number'
                        required 
                        data-vv-scope="form2" 
                        name="directors[][Phone]">
                      </v-text-field>   
                  </v-col>
                  <v-col cols="6">
                    <v-text-field 
                        v-model="directors[index].Address" label="Address" 
                        :error-messages="errors.collect(`directors_${index}_Address`)" 
                        v-validate="'required'" 
                        :data-vv-name="`directors_${index}_Address`" 
                        data-vv-as = 'Address'
                        required 
                        data-vv-scope="form2"
                        name="directors[][Address]">
                    </v-text-field>
                  </v-col>
              </v-row>
              
      
              
              <v-row v-if="index!=0">
                <v-col>
                    <v-btn @click="removeDirector(index)">Remove</v-btn>
                </v-col>
              </v-row>
          </div>
            
            <v-btn
              color="primary"
              @click="stepContinue('form2')"
              :disabled="errors.any()"
            >

            <!-- <v-btn
              color="primary"
              @click="goNextStep()"
              
            > -->
            <v-icon left>skip_next</v-icon> Continue
            </v-btn>
            <v-btn @click="addNewDirector" ><v-icon left> person_add</v-icon> Add</v-btn>
            <v-btn text @click="goBack()"><v-icon left>skip_previous</v-icon> Back</v-btn>
          </form>
        </v-stepper-content>
  
        <v-stepper-content step="3">
            <form data-vv-scope="form3">
            
              <div v-for="(shareholder, index) in shareholders">
                <v-row>
        
                    <v-col>
                        <v-alert
                        icon="person"
                        type="info"
                        
                        text
                        >
                        SHAREHOLDER {{index + 1}}
                        </v-alert>
                    </v-col>
                </v-row>
        
                <v-row>
                    <v-col cols="3">
                        <v-select
                          :items="shareholder_options"
                          name="shareholders[][Type]"
                          v-model="shareholders[index].Type" 
                          label="Type" 
                          :error-messages="errors.collect(`shareholders_${index}_Type`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Type`"
                          data-vv-as = 'Type'  
                          data-vv-scope="form3"
                          @input="onValueChange($event,shareholders[index].ID)" 
                          required
                        >
                        </v-select>
                        
                      </v-col>
        
                </v-row>
                <v-row>
                    <v-col cols="3">
                      <v-text-field 
                          v-model="shareholders[index].Name" label="Name" 
                          :error-messages="errors.collect(`shareholders_${index}_Name`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Name`" 
                          data-vv-as = 'Name'
                          required 
                          data-vv-scope="form3"
                          name="shareholders[][Name]"
                          >
                        </v-text-field>
                      </v-text-field>
                    </v-col>
                    <v-col cols="3" v-if="shareholders[index].isCorpShow">
                        
                        <v-text-field 
                          v-model="shareholders[index].ID" label="Registration Number" 
                          :error-messages="errors.collect(`shareholders_${index}_ID`)" 
                          v-validate="'required'" 
                          data-vv-as = 'Registration Number'
                          :data-vv-name="`shareholders_${index}_ID`" required data-vv-scope="form3"
                          name="shareholders[][ID]">
                        </v-text-field>
                    </v-col>
        
                    <v-col cols="3" v-else>
                        <v-text-field 
                          v-model="shareholders[index].ID" label="ID" 
                          :error-messages="errors.collect(`shareholders_${index}_ID`)" 
                          v-validate="'required'" 
                          data-vv-as = 'ID'
                          :data-vv-name="`shareholders_${index}_ID`" required data-vv-scope="form3"
                          name="shareholders[][ID]">
                        </v-text-field>
                    </v-col>
                    
        
                    <v-col cols="3" v-if="shareholders[index].isCorpShow">
                        <v-menu
                        v-model="shareholders[index].Menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="shareholders[index].DOB"
                            label="Date of Incorporation"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                            :error-messages="errors.collect(`shareholders_${index}_DOB`)" 
                            v-validate="'required'" 
                            data-vv-as = 'Country of Incorporation'
                            :data-vv-name="`shareholders_${index}_DOB`" 
                            required 
                            data-vv-scope="form2"
                            
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="shareholders[index].DOB" @input="shareholders[index].Menu = false"></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="3" v-else>
                        <v-menu
                        v-model="shareholders[index].Menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="shareholders[index].DOB"
                            label="DOB"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                            :error-messages="errors.collect(`shareholders_${index}_DOB`)" 
                            v-validate="'required'" 
                            :data-vv-name="`shareholders_${index}_DOB`" 
                            data-vv-as = 'DOB'
                            required 
                            data-vv-scope="form2"
                            
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="shareholders[index].DOB" @input="shareholders[index].Menu = false"></v-date-picker>
                      </v-menu>
                    </v-col>
        
                    <v-col cols="3" v-if="shareholders[index].isCorpShow">
                        <v-select
                        :items="country_options"
                        name="shareholders[][Nationality]"
                        v-model="shareholders[index].Nationality" 
                        label="Country of Incorporation" 
                        :error-messages="errors.collect(`shareholders_${index}_Nationality`)" 
                        v-validate="'required'" 
                       :data-vv-name="`shareholders_${index}_Nationality`"  
                        data-vv-as = 'Country of Incorporation'
                        data-vv-scope="form3"
                        >
                        </v-select>
                      
                    </v-col>
                    <v-col cols="3" v-else>
                        <v-select
                          :items="nationality_options"
                          name="shareholders[][Nationality]"
                          v-model="shareholders[index].Nationality" 
                          label="Nationality" 
                          :error-messages="errors.collect(`shareholders_${index}_Nationality`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Nationality`"  
                          data-vv-as = 'Nationality'
                          data-vv-scope="form3"
                          >
                        </v-select>    
                    </v-col>
        
                </v-row>
                
                <v-row>
                    <v-col cols="3">
                      <v-text-field 
                          v-model="shareholders[index].Email" label="Email" 
                          :error-messages="errors.collect(`shareholders_${index}_Email`)" 
                          v-validate="'required|email'" 
                          :data-vv-name="`shareholders_${index}_Email`" 
                          data-vv-as = 'Email'
                          required 
                          data-vv-scope="form3"
                          name="shareholders[][Email]">
                      </v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field 
                          v-model="shareholders[index].Phone" label="Contact Number" 
                          :error-messages="errors.collect(`shareholders_${index}_Phone`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Phone`" 
                          data-vv-as = 'Contact Number'
                          required 
                          data-vv-scope="form3" 
                          name="shareholders[][Phone]">
                        </v-text-field>   
                    </v-col>
                    <v-col cols="3">
                      <v-text-field 
                          v-model="shareholders[index].Address" label="Address" 
                          :error-messages="errors.collect(`shareholders_${index}_Address`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Address`" 
                          data-vv-as = 'Address'
                          required 
                          data-vv-scope="form3"
                          name="shareholders[][Address]">
                      </v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field 
                          v-model="shareholders[index].Shares" label="Shares" 
                          :error-messages="errors.collect(`shareholders_${index}_Shares`)" 
                          v-validate="'required'" 
                          :data-vv-name="`shareholders_${index}_Shares`" 
                          data-vv-as = 'Shares'
                          required 
                          data-vv-scope="form3"
                          name="shareholders[][Shares]">
                      </v-text-field>
                    </v-col>
                    
                </v-row>
                
        
                <v-row v-if="shareholders[index].isCorpShow">
                    <v-col cols="3">
                      <v-text-field 
                          v-model="shareholders[index].Corporate_Representative_Name" label="Corporate Representative Name" 
                          :error-messages="errors.collect(`shareholders_${index}_Corporate_Representative_Name`)" 
                          v-validate="'required'" 
                          name="shareholders[][Corporate_Representative_Name]"
                          :data-vv-name="`owner${index}_Corporate_Representative_Name`" 
                          data-vv-as = 'Name'
                          required 
                          data-vv-scope="form3">
                      </v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field 
                          v-model="owner[index]._Address" label="Address" 
                          :error-messages="errors.collect(`owner_${index}_Address`)" 
                          v-validate="'required'" 
                          name="owner[][Address]"
                          data-vv-as = 'Name'
                          :data-vv-name="`owner_${index}Address`" required data-vv-scope="form3">
                      </v-text-field>
                    </v-col>
                    
                    
                </v-row>
                
                <v-row v-if="index!=0">
                  <v-col>
                      <v-btn @click="removeShareholder(index)">Remove</v-btn>
                  </v-col>
                </v-row>
            </div>
                
      
                <v-btn
                  color="primary"
                  @click="stepContinue('form3')"
                  
                >
                <!-- <v-btn
                  color="primary"
                  @click="goNextStep()"
                 
                > -->
                
                  Submit <v-icon right>send</v-icon>
                </v-btn>
                <v-btn @click="addNewShareholder"><v-icon left>person_add</v-icon> Add </v-btn>
                <v-btn text @click="goBack()"><v-icon left>skip_previous</v-icon> Back </v-btn>
              </form>
  
          
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-alert
    icon="cloud_upload"
    type="info"
    v-if="!isLoading"
    >
    {{responsefromServer}}
    </v-alert>

    
</div>
</template>

<script>
    
    export default {
        name: "CreateEvent",
        components: {  },
        mounted() {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        },
        data() {
          return {
            isLoading: true
          }
        }
    };
    </script>