export interface IUser {
  AccountName: string;
  DirectReports: string[];
  DisplayName: string;
  Email: string;
  ExtendedManagers: string[];
  ExtendedReports: string[];
  IsFollowed: boolean;
  LatestPost?: any;
  Peers: string[];
  PersonalSiteHostUrl: string;
  PersonalUrl: string;
  PictureUrl: string;
  Title: string;
  UserProfileProperties: IUserProfileProperty[];
  UserUrl: string;
  userProperties: IUserProperties;
}

export interface IUserProperties {
  UserProfile_GUID: string;
  SID: string;
  ADGuid: string;
  AccountName: string;
  FirstName: string;
  'SPS-PhoneticFirstName': string;
  LastName: string;
  'SPS-PhoneticLastName': string;
  PreferredName: string;
  'SPS-PhoneticDisplayName': string;
  WorkPhone: string;
  Department: string;
  Title: string;
  'SPS-Department': string;
  Manager: string;
  AboutMe: string;
  PersonalSpace: string;
  PictureURL: string;
  UserName: string;
  QuickLinks: string;
  WebSite: string;
  PublicSiteRedirect: string;
  'SPS-JobTitle': string;
  'SPS-DataSource': string;
  'SPS-MemberOf': string;
  'SPS-Dotted-line': string;
  'SPS-Peers': string;
  'SPS-Responsibility': string;
  'SPS-SipAddress': string;
  'SPS-MySiteUpgrade': string;
  'SPS-DontSuggestList': string;
  'SPS-ProxyAddresses': string;
  'SPS-HireDate': string;
  'SPS-DisplayOrder': string;
  'SPS-ClaimID': string;
  'SPS-ClaimProviderID': string;
  'SPS-LastColleagueAdded': string;
  'SPS-OWAUrl': string;
  'SPS-ResourceSID': string;
  'SPS-ResourceAccountName': string;
  'SPS-MasterAccountName': string;
  'SPS-UserPrincipalName': string;
  'SPS-O15FirstRunExperience': string;
  'SPS-PersonalSiteInstantiationState': string;
  'SPS-DistinguishedName': string;
  'SPS-SourceObjectDN': string;
  'SPS-LastKeywordAdded': string;
  'SPS-ClaimProviderType': string;
  'SPS-SavedAccountName': string;
  'SPS-SavedSID': string;
  'SPS-ObjectExists': string;
  'SPS-PersonalSiteCapabilities': string;
  'SPS-PersonalSiteFirstCreationTime': string;
  'SPS-PersonalSiteLastCreationTime': string;
  'SPS-PersonalSiteNumberOfRetries': string;
  'SPS-PersonalSiteFirstCreationError': string;
  'SPS-FeedIdentifier': string;
  WorkEmail: string;
  CellPhone: string;
  Fax: string;
  HomePhone: string;
  Office: string;
  'SPS-Location': string;
  Assistant: string;
  'SPS-PastProjects': string;
  'SPS-Skills': string;
  'SPS-School': string;
  'SPS-Birthday': string;
  'SPS-StatusNotes': string;
  'SPS-Interests': string;
  'SPS-HashTags': string;
  'SPS-EmailOptin': string;
  'SPS-PrivacyPeople': string;
  'SPS-PrivacyActivity': string;
  'SPS-PictureTimestamp': string;
  'SPS-PicturePlaceholderState': string;
  'SPS-PictureExchangeSyncState': string;
  'SPS-MUILanguages': string;
  'SPS-ContentLanguages': string;
  'SPS-TimeZone': string;
  'SPS-RegionalSettings-FollowWeb': string;
  'SPS-Locale': string;
  'SPS-CalendarType': string;
  'SPS-AltCalendarType': string;
  'SPS-AdjustHijriDays': string;
  'SPS-ShowWeeks': string;
  'SPS-WorkDays': string;
  'SPS-WorkDayStartHour': string;
  'SPS-WorkDayEndHour': string;
  'SPS-Time24': string;
  'SPS-FirstDayOfWeek': string;
  'SPS-FirstWeekOfYear': string;
  'SPS-RegionalSettings-Initialized': string;
  OfficeGraphEnabled: string;
  'SPS-UserType': string;
  'SPS-HideFromAddressLists': string;
  'SPS-RecipientTypeDetails': string;
  DelveFlags: string;
  VideoUserPopup: string;
  PulseMRUPeople: string;
  'msOnline-ObjectId': string;
  'SPS-PointPublishingUrl': string;
  'SPS-TenantInstanceId': string;
  'SPS-SharePointHomeExperienceState': string;
  'SPS-RefreshToken': string;
  'SPS-MultiGeoFlags': string;
  PreferredDataLocation: string;
}

export interface IUserProfileProperty {
  Key: string;
  Value: string;
  ValueType: string;
}
