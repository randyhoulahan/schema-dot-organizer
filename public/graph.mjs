export default {
  '@graph': [ {
    '@id'                              : 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString60.mjs',
    '@type'                            : 'rdfs:Class',
    'rdfs:comment'                     : 'the SCBD\'s language string (language map string) 160 char limit as per googles suggestion for descriptions',
    'rdfs:label'                       : 'LString60',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/name'
    } ],
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString.mjs'
    }
  }, {
    '@id'                              : 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString160.mjs',
    '@type'                            : 'rdfs:Class',
    'rdfs:comment'                     : 'the SCBD\'s language string (language map string)  160 char limit as per googles suggestion for descriptions ',
    'rdfs:label'                       : 'LString160',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/alternateName'
    }, {
      '@id': 'https://schema.org/description'
    } ],
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString.mjs'
    }
  }, {
    '@id'                              : 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString5000.mjs',
    '@type'                            : 'rdfs:Class',
    'rdfs:comment'                     : 'the SCBD\'s language string (language map string)  600 char limit as per googles suggestion for descriptions ',
    'rdfs:label'                       : 'LString5000',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/disambiguatingDescription'
    } ],
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString.mjs'
    }
  }, {
    '@id'                              : 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist/vocab/LString.mjs',
    '@type'                            : 'rdfs:Class',
    'rdfs:comment'                     : 'A pledge or undertaking made by an Actor towards an environmental target  (language map string)',
    'rdfs:label'                       : 'LString',
    'https://schema.org/domainIncludes': [ {
      '@id': 'https://schema.org/text'
    } ]
  }, {
    '@id'         : 'schema:Thing',
    '@type'       : 'rdfs:Class',
    'rdfs:comment': 'The most generic type of item.',
    'rdfs:label'  : 'Thing'
  }, {
    '@id'            : 'schema:URL',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Data type: URL.',
    'rdfs:label'     : 'URL',
    'rdfs:subClassOf': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                                          : 'schema:Event',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://purl.org/dc/dcmitype/Event'
    },
    'rdfs:comment'   : 'An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.',
    'rdfs:label'     : 'Event',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    }
  }, {
    '@id'            : 'schema:PropertyValue',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A property-value pair, e.g. representing a feature of a product or place. Use the \'name\' property for the name of the property. If there is an additional human-readable version of the value, put that into the \'description\' property.\\n\\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.\n    ',
    'rdfs:label'     : 'PropertyValue',
    'rdfs:subClassOf': {
      '@id': 'schema:StructuredValue'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass'
    }
  }, {
    '@id'            : 'schema:StructuredValue',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.',
    'rdfs:label'     : 'StructuredValue',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'            : 'schema:QuantitativeValue',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : ' A point value or interval for product characteristics and other purposes.',
    'rdfs:label'     : 'QuantitativeValue',
    'rdfs:subClassOf': {
      '@id': 'schema:StructuredValue'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass'
    }
  }, {
    '@id'            : 'schema:Intangible',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A utility class that serves as the umbrella for a number of \'intangible\' things such as quantities, structured values, etc.',
    'rdfs:label'     : 'Intangible',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    }
  }, {
    '@id'            : 'schema:CreativeWork',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The most generic kind of creative work, including books, movies, photographs, software programs, etc.',
    'rdfs:label'     : 'CreativeWork',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    }
  }, {
    '@id'            : 'schema:Place',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Entities that have a somewhat fixed, physical extension.',
    'rdfs:label'     : 'Place',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    }
  }, {
    '@id'            : 'schema:AboutPage',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Web page type: About page.',
    'rdfs:label'     : 'AboutPage',
    'rdfs:subClassOf': {
      '@id': 'schema:WebPage'
    }
  }, {
    '@id'            : 'schema:GeoCoordinates',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The geographic coordinates of a place or event.',
    'rdfs:label'     : 'GeoCoordinates',
    'rdfs:subClassOf': {
      '@id': 'schema:StructuredValue'
    }
  }, {
    '@id'            : 'schema:WebPage',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.',
    'rdfs:label'     : 'WebPage',
    'rdfs:subClassOf': {
      '@id': 'schema:CreativeWork'
    }
  }, {
    '@id'            : 'schema:MediaObject',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject\'s).',
    'rdfs:label'     : 'MediaObject',
    'rdfs:subClassOf': {
      '@id': 'schema:CreativeWork'
    }
  }, {
    '@id'            : 'schema:PostalAddress',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The mailing address.',
    'rdfs:label'     : 'PostalAddress',
    'rdfs:subClassOf': {
      '@id': 'schema:ContactPoint'
    }
  }, {
    '@id'            : 'schema:GeoShape',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.',
    'rdfs:label'     : 'GeoShape',
    'rdfs:subClassOf': {
      '@id': 'schema:StructuredValue'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    }
  }, {
    '@id'            : 'schema:Organization',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An organization such as a school, NGO, corporation, club, etc.',
    'rdfs:label'     : 'Organization',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    }
  }, {
    '@id'            : 'schema:Distance',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Properties that take Distances as values are of the form \'&lt;Number&gt; &lt;Length unit of measure&gt;\'. E.g., \'7 ft\'.',
    'rdfs:label'     : 'Distance',
    'rdfs:subClassOf': {
      '@id': 'schema:Quantity'
    }
  }, {
    '@id'            : 'schema:ContactPoint',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A contact point&#x2014;for example, a Customer Complaints department.',
    'rdfs:label'     : 'ContactPoint',
    'rdfs:subClassOf': {
      '@id': 'schema:StructuredValue'
    }
  }, {
    '@id'            : 'schema:Country',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A country.',
    'rdfs:label'     : 'Country',
    'rdfs:subClassOf': {
      '@id': 'schema:AdministrativeArea'
    }
  }, {
    '@id'            : 'schema:Map',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A map.',
    'rdfs:label'     : 'Map',
    'rdfs:subClassOf': {
      '@id': 'schema:CreativeWork'
    }
  }, {
    '@id'                                          : 'schema:Person',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://xmlns.com/foaf/0.1/Person'
    },
    'rdfs:comment'   : 'A person (alive, dead, undead, or fictional).',
    'rdfs:label'     : 'Person',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    }
  }, {
    '@id'            : 'schema:AdministrativeArea',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A geographical region, typically under the jurisdiction of a particular government.',
    'rdfs:label'     : 'AdministrativeArea',
    'rdfs:subClassOf': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'            : 'schema:Quantity',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like \'3 Kg\' or \'4 milligrams\'.',
    'rdfs:label'     : 'Quantity',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'            : 'schema:Language',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]].',
    'rdfs:label'     : 'Language',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'                                          : 'schema:Dataset',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': [ {
      '@id': 'http://purl.org/dc/dcmitype/Dataset'
    }, {
      '@id': 'http://www.w3.org/ns/dcat#Dataset'
    }, {
      '@id': 'http://rdfs.org/ns/void#Dataset'
    } ],
    'rdfs:comment'   : 'A body of structured information describing some topic(s) of interest.',
    'rdfs:label'     : 'Dataset',
    'rdfs:subClassOf': {
      '@id': 'schema:CreativeWork'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass'
    }
  }, {
    '@id'                                          : 'schema:ImageObject',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://purl.org/dc/dcmitype/Image'
    },
    'rdfs:comment'   : 'An image file.',
    'rdfs:label'     : 'ImageObject',
    'rdfs:subClassOf': {
      '@id': 'schema:MediaObject'
    }
  }, {
    '@id'            : 'schema:DefinedTerm',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.',
    'rdfs:label'     : 'DefinedTerm',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/894'
    }
  }, {
    '@id'            : 'schema:VirtualLocation',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.',
    'rdfs:label'     : 'VirtualLocation',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1842'
    }
  }, {
    '@id'                                          : 'schema:DataCatalog',
    '@type'                                        : 'rdfs:Class',
    'http://www.w3.org/2002/07/owl#equivalentClass': {
      '@id': 'http://www.w3.org/ns/dcat#Catalog'
    },
    'rdfs:comment'   : 'A collection of datasets.',
    'rdfs:label'     : 'DataCatalog',
    'rdfs:subClassOf': {
      '@id': 'schema:CreativeWork'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass'
    }
  }, {
    '@id'            : 'schema:Enumeration',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Lists or enumerations—for example, a list of cuisines or music genres, etc.',
    'rdfs:label'     : 'Enumeration',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'            : 'schema:ProfilePage',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Web page type: Profile page.',
    'rdfs:label'     : 'ProfilePage',
    'rdfs:subClassOf': {
      '@id': 'schema:WebPage'
    }
  }, {
    '@id'            : 'schema:ProgramMembership',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.',
    'rdfs:label'     : 'ProgramMembership',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'            : 'schema:VideoObject',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A video file.',
    'rdfs:label'     : 'VideoObject',
    'rdfs:subClassOf': {
      '@id': 'schema:MediaObject'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    }
  }, {
    '@id'            : 'schema:Project',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.\nUse properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. \n   ',
    'rdfs:label'     : 'Project',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': [ {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/383'
    }, {
      '@id': 'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab'
    } ]
  }, {
    '@id'            : 'schema:Consortium',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A Consortium is a membership [[Organization]] whose members are typically Organizations.',
    'rdfs:label'     : 'Consortium',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1559'
    }
  }, {
    '@id'            : 'schema:Corporation',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Organization: A business corporation.',
    'rdfs:label'     : 'Corporation',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews'
    }
  }, {
    '@id'            : 'schema:EducationalOrganization',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An educational organization.',
    'rdfs:label'     : 'EducationalOrganization',
    'rdfs:subClassOf': [ {
      '@id': 'schema:CivicStructure'
    }, {
      '@id': 'schema:Organization'
    } ]
  }, {
    '@id'            : 'schema:CivicStructure',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A public structure, such as a town hall or concert hall.',
    'rdfs:label'     : 'CivicStructure',
    'rdfs:subClassOf': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'            : 'schema:GovernmentOrganization',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A governmental organization or agency.',
    'rdfs:label'     : 'GovernmentOrganization',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'schema:MedicalOrganization',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A medical organization (physical or not), such as hospital, institution or clinic.',
    'rdfs:label'     : 'MedicalOrganization',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'schema:NGO',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Organization: Non-governmental Organization.',
    'rdfs:label'     : 'NGO',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'schema:FundingAgency',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages\n    the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s).\n    A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.\n    \nExamples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...\n    ',
    'rdfs:label'     : 'FundingAgency',
    'rdfs:subClassOf': {
      '@id': 'schema:Project'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': [ {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/383'
    }, {
      '@id': 'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FundInfoCollab'
    } ]
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/UNCS.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'United Nations Common System',
    'rdfs:label'     : 'UNCS',
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IGO.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IGO.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An intergovernmental organization (IGO) or international organization is an organization composed primarily of sovereign states (referred to as member states), or of other intergovernmental organizations. IGOs are established by a treaty that acts as a charter creating the group.',
    'rdfs:label'     : 'IGO',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/OrganizationSize.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Size of an organization by the number of employees',
    'rdfs:label'     : 'OrganizationSize',
    'rdfs:subClassOf': {
      '@id': 'schema:QuantitativeValue'
    }
  }, {
    '@id'            : 'schema:StatusEnumeration',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Lists or enumerations dealing with status types.',
    'rdfs:label'     : 'StatusEnumeration',
    'rdfs:subClassOf': {
      '@id': 'schema:Enumeration'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2604'
    }
  }, {
    '@id'            : 'schema:Landform',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.',
    'rdfs:label'     : 'Landform',
    'rdfs:subClassOf': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'            : 'schema:State',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A state or province of a country.',
    'rdfs:label'     : 'State',
    'rdfs:subClassOf': {
      '@id': 'schema:AdministrativeArea'
    }
  }, {
    '@id'            : 'schema:City',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A city or town.',
    'rdfs:label'     : 'City',
    'rdfs:subClassOf': {
      '@id': 'schema:AdministrativeArea'
    }
  }, {
    '@id'            : 'schema:Action',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\\n\\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).',
    'rdfs:label'     : 'Action',
    'rdfs:subClassOf': {
      '@id': 'schema:Thing'
    },
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass'
    }
  }, {
    '@id'            : 'schema:CommunicateAction',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.',
    'rdfs:label'     : 'CommunicateAction',
    'rdfs:subClassOf': {
      '@id': 'schema:InteractAction'
    }
  }, {
    '@id'            : 'schema:InteractAction',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The act of interacting with another person or organization.',
    'rdfs:label'     : 'InteractAction',
    'rdfs:subClassOf': {
      '@id': 'schema:Action'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NOORG.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Action agenda org reference that has not been whos type and non profit status has not been confirmed',
    'rdfs:label'     : 'NOORG',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'schema:Audience',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Intended audience for an item, i.e. the group for whom the item was created.',
    'rdfs:label'     : 'Audience',
    'rdfs:subClassOf': {
      '@id': 'schema:Intangible'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Partnership.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Partnership consists of two or more legal entities pooling their resources to operate a shared objective.',
    'rdfs:label'     : 'Partnership',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Association.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Association is a connection or cooperative link between people or organizations',
    'rdfs:label'     : 'Association',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Coalition.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Coalition  is the denotation for a group formed when two or more people or Organizations agree to work together temporarily in a partnership to achieve a common goal.',
    'rdfs:label'     : 'Coalition',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/SoleProprietorship.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A Sole Proprietorship is an unincorporated business with only one owner who pays personal income tax on profits earned. Sole proprietorships are easy to establish and dismantle, due to a lack of government involvement, making them popular with small business owners and contractors.',
    'rdfs:label'     : 'SoleProprietorship',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IPLC.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Indigenous peoples and local communities (IPLCs) are, typically, ethnic groups who are descended from and identify with the original inhabitants of a given region, in contrast to groups that have settled, occupied or colonized the area more recently.',
    'rdfs:label'     : 'IPLC',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/CommitmentAction.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A pledge or undertaking made by an Actor towards a Thing',
    'rdfs:label'     : 'CommitmentAction',
    'rdfs:subClassOf': {
      '@id': 'schema:Action'
    }
  }, {
    '@id'                  : 'schema:potentialAction',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Indicates a potential Action, which describes an idealized action in which this thing would play an \'object\' role.',
    'rdfs:label'           : 'potentialAction',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Action'
    }
  }, {
    '@id'                  : 'schema:subjectOf',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A CreativeWork or Event about this Thing.',
    'rdfs:label'           : 'subjectOf',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:inverseOf': {
      '@id': 'schema:about'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:CreativeWork'
    }, {
      '@id': 'schema:Event'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1670'
    }
  }, {
    '@id'                  : 'schema:email',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Email address.',
    'rdfs:label'           : 'email',
    'schema:domainIncludes': [ {
      '@id': 'schema:ContactPoint'
    }, {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:url',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'URL of the item.',
    'rdfs:label'           : 'url',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:URL'
    }
  }, {
    '@id'                  : 'schema:sameAs',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'URL of a reference Web page that unambiguously indicates the item\'s identity. E.g. the URL of the item\'s Wikipedia page, Wikidata entry, or official website.',
    'rdfs:label'           : 'sameAs',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:URL'
    }
  }, {
    '@id'                                             : 'schema:name',
    '@type'                                           : 'rdf:Property',
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/title'
    },
    'rdfs:comment'      : 'The name of the item.',
    'rdfs:label'        : 'name',
    'rdfs:subPropertyOf': {
      '@id': 'rdfs:label'
    },
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'               : 'schema:additionalType',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the \'typeof\' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.',
    'rdfs:label'        : 'additionalType',
    'rdfs:subPropertyOf': {
      '@id': 'rdf:type'
    },
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:URL'
    }
  }, {
    '@id'                  : 'schema:alternateName',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An alias for the item.',
    'rdfs:label'           : 'alternateName',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                                             : 'schema:description',
    '@type'                                           : 'rdf:Property',
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/description'
    },
    'rdfs:comment'         : 'A description of the item.',
    'rdfs:label'           : 'description',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                                             : 'schema:identifier',
    '@type'                                           : 'rdf:Property',
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/identifier'
    },
    'rdfs:comment'         : 'The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ',
    'rdfs:label'           : 'identifier',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:URL'
    }, {
      '@id': 'schema:PropertyValue'
    } ]
  }, {
    '@id'                  : 'schema:mainEntityOfPage',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.',
    'rdfs:label'           : 'mainEntityOfPage',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:inverseOf': {
      '@id': 'schema:mainEntity'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:URL'
    }, {
      '@id': 'schema:CreativeWork'
    } ]
  }, {
    '@id'                  : 'schema:image',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].',
    'rdfs:label'           : 'image',
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:ImageObject'
    }, {
      '@id': 'schema:URL'
    } ]
  }, {
    '@id'               : 'schema:disambiguatingDescription',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
    'rdfs:label'        : 'disambiguatingDescription',
    'rdfs:subPropertyOf': {
      '@id': 'schema:description'
    },
    'schema:domainIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:text',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The textual content of this CreativeWork.',
    'rdfs:label'           : 'text',
    'schema:domainIncludes': {
      '@id': 'schema:CreativeWork'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:caption',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].',
    'rdfs:label'           : 'caption',
    'schema:domainIncludes': [ {
      '@id': 'schema:ImageObject'
    }, {
      '@id': 'schema:AudioObject'
    }, {
      '@id': 'schema:VideoObject'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:MediaObject'
    } ]
  }, {
    '@id'                  : 'schema:propertyID',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be\n(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)\na URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).\nStandards bodies should promote a standard prefix for the identifiers of properties from their standards.',
    'rdfs:label'           : 'propertyID',
    'schema:domainIncludes': {
      '@id': 'schema:PropertyValue'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:URL'
    }, {
      '@id': 'schema:Text'
    } ]
  }, {
    '@id'                  : 'schema:value',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The value of the quantitative value or property value node.\\n\\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is \'Number\'.\\n* For [[PropertyValue]], it can be \'Text;\', \'Number\', \'Boolean\', or \'StructuredValue\'.\\n* Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.\\n* Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator.',
    'rdfs:label'           : 'value',
    'schema:domainIncludes': [ {
      '@id': 'schema:MonetaryAmount'
    }, {
      '@id': 'schema:PropertyValue'
    }, {
      '@id': 'schema:QuantitativeValue'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Number'
    }, {
      '@id': 'schema:StructuredValue'
    }, {
      '@id': 'schema:Boolean'
    }, {
      '@id': 'schema:Text'
    } ],
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms'
    }
  }, {
    '@id'                  : 'schema:isFamilyFriendly',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Indicates whether this content is family friendly.',
    'rdfs:label'           : 'isFamilyFriendly',
    'schema:domainIncludes': {
      '@id': 'schema:CreativeWork'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Boolean'
    }
  }, {
    '@id'                                             : 'schema:spatialCoverage',
    '@type'                                           : 'rdf:Property',
    'http://www.w3.org/2002/07/owl#equivalentProperty': {
      '@id': 'http://purl.org/dc/terms/spatial'
    },
    'rdfs:comment'      : 'The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.',
    'rdfs:label'        : 'spatialCoverage',
    'rdfs:subPropertyOf': {
      '@id': 'schema:contentLocation'
    },
    'schema:domainIncludes': {
      '@id': 'schema:CreativeWork'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'                  : 'schema:geo',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The geo coordinates of the place.',
    'rdfs:label'           : 'geo',
    'schema:domainIncludes': {
      '@id': 'schema:Place'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:GeoCoordinates'
    }, {
      '@id': 'schema:GeoShape'
    } ]
  }, {
    '@id'                  : 'schema:address',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Physical address of the item.',
    'rdfs:label'           : 'address',
    'schema:domainIncludes': [ {
      '@id': 'schema:GeoCoordinates'
    }, {
      '@id': 'schema:GeoShape'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Place'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:PostalAddress'
    } ]
  }, {
    '@id'                  : 'schema:hasMap',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A URL to a map of the place.',
    'rdfs:label'           : 'hasMap',
    'schema:domainIncludes': {
      '@id': 'schema:Place'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:URL'
    }, {
      '@id': 'schema:Map'
    } ]
  }, {
    '@id'                  : 'schema:containsPlace',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The basic containment relation between a place and another that it contains.',
    'rdfs:label'           : 'containsPlace',
    'schema:domainIncludes': {
      '@id': 'schema:Place'
    },
    'schema:inverseOf': {
      '@id': 'schema:containedInPlace'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'                  : 'schema:containedInPlace',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The basic containment relation between a place and one that contains it.',
    'rdfs:label'           : 'containedInPlace',
    'schema:domainIncludes': {
      '@id': 'schema:Place'
    },
    'schema:inverseOf': {
      '@id': 'schema:containsPlace'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Place'
    }
  }, {
    '@id'                  : 'schema:postalCode',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The postal code. For example, 94043.',
    'rdfs:label'           : 'postalCode',
    'schema:domainIncludes': [ {
      '@id': 'schema:GeoShape'
    }, {
      '@id': 'schema:GeoCoordinates'
    }, {
      '@id': 'schema:DefinedRegion'
    }, {
      '@id': 'schema:PostalAddress'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2506'
    }
  }, {
    '@id'                  : 'schema:addressCountry',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).',
    'rdfs:label'           : 'addressCountry',
    'schema:domainIncludes': [ {
      '@id': 'schema:GeoShape'
    }, {
      '@id': 'schema:PostalAddress'
    }, {
      '@id': 'schema:DefinedRegion'
    }, {
      '@id': 'schema:GeoCoordinates'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Country'
    }, {
      '@id': 'schema:Text'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2506'
    }
  }, {
    '@id'                  : 'schema:latitude',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).',
    'rdfs:label'           : 'latitude',
    'schema:domainIncludes': [ {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:GeoCoordinates'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Number'
    }, {
      '@id': 'schema:Text'
    } ]
  }, {
    '@id'                  : 'schema:longitude',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).',
    'rdfs:label'           : 'longitude',
    'schema:domainIncludes': [ {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:GeoCoordinates'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:Number'
    } ]
  }, {
    '@id'                  : 'schema:contentUrl',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Actual bytes of the media object, for example the image file or video file.',
    'rdfs:label'           : 'contentUrl',
    'schema:domainIncludes': {
      '@id': 'schema:MediaObject'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:URL'
    }
  }, {
    '@id'                  : 'schema:contentSize',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'File size in (mega/kilo) bytes.',
    'rdfs:label'           : 'contentSize',
    'schema:domainIncludes': {
      '@id': 'schema:MediaObject'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:width',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The width of the item.',
    'rdfs:label'           : 'width',
    'schema:domainIncludes': [ {
      '@id': 'schema:VisualArtwork'
    }, {
      '@id': 'schema:MediaObject'
    }, {
      '@id': 'schema:Product'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:QuantitativeValue'
    }, {
      '@id': 'schema:Distance'
    } ]
  }, {
    '@id'                  : 'schema:height',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The height of the item.',
    'rdfs:label'           : 'height',
    'schema:domainIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:VisualArtwork'
    }, {
      '@id': 'schema:Product'
    }, {
      '@id': 'schema:MediaObject'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:QuantitativeValue'
    }, {
      '@id': 'schema:Distance'
    } ]
  }, {
    '@id'                  : 'schema:encodingFormat',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).\n\nIn cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.\n\nUnregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.',
    'rdfs:label'           : 'encodingFormat',
    'schema:domainIncludes': [ {
      '@id': 'schema:CreativeWork'
    }, {
      '@id': 'schema:MediaObject'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:URL'
    } ]
  }, {
    '@id'                  : 'schema:uploadDate',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Date when this media object was uploaded to this site.',
    'rdfs:label'           : 'uploadDate',
    'schema:domainIncludes': {
      '@id': 'schema:MediaObject'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Date'
    }
  }, {
    '@id'                  : 'schema:contactType',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.',
    'rdfs:label'           : 'contactType',
    'schema:domainIncludes': {
      '@id': 'schema:ContactPoint'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:telephone',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The telephone number.',
    'rdfs:label'           : 'telephone',
    'schema:domainIncludes': [ {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:ContactPoint'
    }, {
      '@id': 'schema:Person'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:availableLanguage',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]',
    'rdfs:label'           : 'availableLanguage',
    'schema:domainIncludes': [ {
      '@id': 'schema:ContactPoint'
    }, {
      '@id': 'schema:TouristAttraction'
    }, {
      '@id': 'schema:LodgingBusiness'
    }, {
      '@id': 'schema:ServiceChannel'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Language'
    }, {
      '@id': 'schema:Text'
    } ]
  }, {
    '@id'                  : 'schema:foundingDate',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The date that this organization was founded.',
    'rdfs:label'           : 'foundingDate',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Date'
    }
  }, {
    '@id'                  : 'schema:areaServed',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The geographic area where a service or offered item is provided.',
    'rdfs:label'           : 'areaServed',
    'schema:domainIncludes': [ {
      '@id': 'schema:Demand'
    }, {
      '@id': 'schema:Offer'
    }, {
      '@id': 'schema:Service'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:DeliveryChargeSpecification'
    }, {
      '@id': 'schema:ContactPoint'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:AdministrativeArea'
    }, {
      '@id': 'schema:GeoShape'
    }, {
      '@id': 'schema:Text'
    } ]
  }, {
    '@id'                  : 'schema:event',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Upcoming or past event associated with this place, organization, or action.',
    'rdfs:label'           : 'event',
    'schema:domainIncludes': [ {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:LeaveAction'
    }, {
      '@id': 'schema:InviteAction'
    }, {
      '@id': 'schema:PlayAction'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:InformAction'
    }, {
      '@id': 'schema:JoinAction'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:Event'
    }
  }, {
    '@id'                  : 'schema:parentOrganization',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The larger organization that this organization is a [[subOrganization]] of, if any.',
    'rdfs:label'           : 'parentOrganization',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:inverseOf': {
      '@id': 'schema:subOrganization'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'               : 'schema:logo',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'An associated logo.',
    'rdfs:label'        : 'logo',
    'rdfs:subPropertyOf': {
      '@id': 'schema:image'
    },
    'schema:domainIncludes': [ {
      '@id': 'schema:Service'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Place'
    }, {
      '@id': 'schema:Brand'
    }, {
      '@id': 'schema:Product'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:ImageObject'
    }, {
      '@id': 'schema:URL'
    } ],
    'schema:source': {
      '@id': 'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms'
    }
  }, {
    '@id'                  : 'schema:member',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
    'rdfs:label'           : 'member',
    'schema:domainIncludes': [ {
      '@id': 'schema:ProgramMembership'
    }, {
      '@id': 'schema:Organization'
    } ],
    'schema:inverseOf': {
      '@id': 'schema:memberOf'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    } ]
  }, {
    '@id'               : 'schema:funder',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'A person or organization that supports (sponsors) something through some kind of financial contribution.',
    'rdfs:label'        : 'funder',
    'rdfs:subPropertyOf': {
      '@id': 'schema:sponsor'
    },
    'schema:domainIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:MonetaryGrant'
    }, {
      '@id': 'schema:Event'
    }, {
      '@id': 'schema:CreativeWork'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Person'
    } ]
  }, {
    '@id'                  : 'schema:location',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The location of, for example, where an event is happening, where an organization is located, or where an action takes place.',
    'rdfs:label'           : 'location',
    'schema:domainIncludes': [ {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Event'
    }, {
      '@id': 'schema:Action'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:PostalAddress'
    }, {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:VirtualLocation'
    }, {
      '@id': 'schema:Place'
    } ]
  }, {
    '@id'                  : 'schema:contactPoint',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A contact point for a person or organization.',
    'rdfs:label'           : 'contactPoint',
    'schema:domainIncludes': [ {
      '@id': 'schema:HealthInsurancePlan'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Person'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:ContactPoint'
    }
  }, {
    '@id'                  : 'schema:numberOfEmployees',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The number of employees in an organization e.g. business.',
    'rdfs:label'           : 'numberOfEmployees',
    'schema:domainIncludes': [ {
      '@id': 'schema:BusinessAudience'
    }, {
      '@id': 'schema:Organization'
    } ],
    'schema:rangeIncludes': {
      '@id': 'schema:QuantitativeValue'
    }
  }, {
    '@id'                  : 'schema:subOrganization',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific \'department\' property.',
    'rdfs:label'           : 'subOrganization',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:inverseOf': {
      '@id': 'schema:parentOrganization'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'                  : 'schema:nonprofitStatus',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.',
    'rdfs:label'           : 'nonprofitStatus',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:NonprofitType'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2543'
    }
  }, {
    '@id'                  : 'schema:size',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A standardized size of a product or creative work, often simplifying richer information into a simple textual string, either through referring to named sizes or (in the case of product markup), by adopting conventional simplifications. Use of QuantitativeValue with a unitCode or unitText can add more structure; in other cases, the /width, /height, /depth and /weight properties may be more applicable. ',
    'rdfs:label'           : 'size',
    'schema:domainIncludes': [ {
      '@id': 'schema:Product'
    }, {
      '@id': 'schema:CreativeWork'
    } ],
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:QuantitativeValue'
    }, {
      '@id': 'schema:DefinedTerm'
    }, {
      '@id': 'schema:Text'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1797'
    }
  }, {
    '@id'                  : 'schema:memberOf',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
    'rdfs:label'           : 'memberOf',
    'schema:domainIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    } ],
    'schema:inverseOf': {
      '@id': 'schema:member'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:ProgramMembership'
    } ]
  }, {
    '@id'                  : 'schema:knowsLanguage',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).',
    'rdfs:label'           : 'knowsLanguage',
    'schema:domainIncludes': [ {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Person'
    } ],
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Language'
    }, {
      '@id': 'schema:Text'
    } ],
    'schema:source': [ {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1688'
    }, {
      '@id': 'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#TP'
    } ]
  }, {
    '@id'                  : 'schema:sponsor',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.',
    'rdfs:label'           : 'sponsor',
    'schema:domainIncludes': [ {
      '@id': 'schema:Grant'
    }, {
      '@id': 'schema:CreativeWork'
    }, {
      '@id': 'schema:MedicalStudy'
    }, {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Event'
    }, {
      '@id': 'schema:Person'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    } ]
  }, {
    '@id'                  : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/nationalScope.mjs',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The the national scope of the organization',
    'rdfs:label'           : 'nationalScope',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:rangeIncludes': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs'
    }
  }, {
    '@id'                  : 'schema:jobTitle',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The job title of the person (for example, Financial Manager).',
    'rdfs:label'           : 'jobTitle',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:DefinedTerm'
    }, {
      '@id': 'schema:Text'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2192'
    }
  }, {
    '@id'                  : 'schema:givenName',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Given name. In the U.S., the first name of a Person.',
    'rdfs:label'           : 'givenName',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:honorificSuffix',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An honorific suffix following a Person\'s name such as M.D. /PhD/MSCSW.',
    'rdfs:label'           : 'honorificSuffix',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'               : 'schema:affiliation',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'An organization that this person is affiliated with. For example, a school/university, a club, or a team.',
    'rdfs:label'        : 'affiliation',
    'rdfs:subPropertyOf': {
      '@id': 'schema:memberOf'
    },
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'                  : 'schema:worksFor',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Organizations that the person works for.',
    'rdfs:label'           : 'worksFor',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'                  : 'schema:additionalName',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An additional name for a Person, can be used for a middle name.',
    'rdfs:label'           : 'additionalName',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:honorificPrefix',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'An honorific prefix preceding a Person\'s name such as Dr/Mrs/Mr.',
    'rdfs:label'           : 'honorificPrefix',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:nationality',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Nationality of the person.',
    'rdfs:label'           : 'nationality',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Country'
    }
  }, {
    '@id'                  : 'schema:familyName',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Family name. In the U.S., the last name of a Person.',
    'rdfs:label'           : 'familyName',
    'schema:domainIncludes': {
      '@id': 'schema:Person'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:variableMeasured',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.',
    'rdfs:label'           : 'variableMeasured',
    'schema:domainIncludes': {
      '@id': 'schema:Dataset'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:PropertyValue'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1083'
    }
  }, {
    '@id'                  : 'schema:includedInDataCatalog',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'A data catalog which contains this dataset.',
    'rdfs:label'           : 'includedInDataCatalog',
    'schema:domainIncludes': {
      '@id': 'schema:Dataset'
    },
    'schema:inverseOf': {
      '@id': 'schema:dataset'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:DataCatalog'
    }
  }, {
    '@id'                  : 'schema:hostingOrganization',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The organization (airline, travelers\' club, etc.) the membership is made with.',
    'rdfs:label'           : 'hostingOrganization',
    'schema:domainIncludes': {
      '@id': 'schema:ProgramMembership'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'                  : 'schema:programName',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The program providing the membership.',
    'rdfs:label'           : 'programName',
    'schema:domainIncludes': {
      '@id': 'schema:ProgramMembership'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Text'
    }
  }, {
    '@id'                  : 'schema:result',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The result produced in the action. e.g. John wrote *a book*.',
    'rdfs:label'           : 'result',
    'schema:domainIncludes': {
      '@id': 'schema:Action'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Thing'
    }
  }, {
    '@id'                  : 'schema:actionStatus',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Indicates the current disposition of the Action.',
    'rdfs:label'           : 'actionStatus',
    'schema:domainIncludes': {
      '@id': 'schema:Action'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:ActionStatusType'
    }
  }, {
    '@id'                  : 'schema:endTime',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it\'s the time offset of the end of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    'rdfs:label'           : 'endTime',
    'schema:domainIncludes': [ {
      '@id': 'schema:Schedule'
    }, {
      '@id': 'schema:Action'
    }, {
      '@id': 'schema:FoodEstablishmentReservation'
    }, {
      '@id': 'schema:MediaObject'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:DateTime'
    }, {
      '@id': 'schema:Time'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2493'
    }
  }, {
    '@id'                  : 'schema:participant',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.',
    'rdfs:label'           : 'participant',
    'schema:domainIncludes': {
      '@id': 'schema:Action'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Organization'
    } ]
  }, {
    '@id'                  : 'schema:startTime',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it\'s the time offset of the start of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    'rdfs:label'           : 'startTime',
    'schema:domainIncludes': [ {
      '@id': 'schema:FoodEstablishmentReservation'
    }, {
      '@id': 'schema:Action'
    }, {
      '@id': 'schema:Schedule'
    }, {
      '@id': 'schema:MediaObject'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:DateTime'
    }, {
      '@id': 'schema:Time'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2493'
    }
  }, {
    '@id'                  : 'schema:agent',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.',
    'rdfs:label'           : 'agent',
    'schema:domainIncludes': {
      '@id': 'schema:Action'
    },
    'schema:rangeIncludes': [ {
      '@id': 'schema:Organization'
    }, {
      '@id': 'schema:Person'
    } ]
  }, {
    '@id'                  : 'schema:about',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The subject matter of the content.',
    'rdfs:label'           : 'about',
    'schema:domainIncludes': [ {
      '@id': 'schema:CommunicateAction'
    }, {
      '@id': 'schema:Event'
    }, {
      '@id': 'schema:CreativeWork'
    } ],
    'schema:inverseOf': {
      '@id': 'schema:subjectOf'
    },
    'schema:rangeIncludes': {
      '@id': 'schema:Thing'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/1670'
    }
  }, {
    '@id'               : 'schema:recipient',
    '@type'             : 'rdf:Property',
    'rdfs:comment'      : 'A sub property of participant. The participant who is at the receiving end of the action.',
    'rdfs:label'        : 'recipient',
    'rdfs:subPropertyOf': {
      '@id': 'schema:participant'
    },
    'schema:domainIncludes': [ {
      '@id': 'schema:GiveAction'
    }, {
      '@id': 'schema:AuthorizeAction'
    }, {
      '@id': 'schema:Message'
    }, {
      '@id': 'schema:PayAction'
    }, {
      '@id': 'schema:ReturnAction'
    }, {
      '@id': 'schema:CommunicateAction'
    }, {
      '@id': 'schema:TipAction'
    }, {
      '@id': 'schema:DonateAction'
    }, {
      '@id': 'schema:SendAction'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Person'
    }, {
      '@id': 'schema:Audience'
    }, {
      '@id': 'schema:ContactPoint'
    }, {
      '@id': 'schema:Organization'
    } ]
  }, {
    '@id'                  : 'schema:inLanguage',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].',
    'rdfs:label'           : 'inLanguage',
    'schema:domainIncludes': [ {
      '@id': 'schema:CreativeWork'
    }, {
      '@id': 'schema:BroadcastService'
    }, {
      '@id': 'schema:LinkRole'
    }, {
      '@id': 'schema:CommunicateAction'
    }, {
      '@id': 'schema:Event'
    }, {
      '@id': 'schema:PronounceableText'
    }, {
      '@id': 'schema:WriteAction'
    } ],
    'schema:rangeIncludes': [ {
      '@id': 'schema:Text'
    }, {
      '@id': 'schema:Language'
    } ],
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2382'
    }
  }, {
    '@id'            : 'schema:NonprofitType',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.',
    'rdfs:label'     : 'NonprofitType',
    'rdfs:subClassOf': {
      '@id': 'schema:Enumeration'
    },
    'schema:isPartOf': {
      '@id': 'https://pending.schema.org'
    },
    'schema:source': {
      '@id': 'https://github.com/schemaorg/schemaorg/issues/2543'
    }
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/TrueNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'TrueNonprofit'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/FalseNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'FalseNonprofit'
  }, {
    '@id'            : 'schema:ActionStatusType',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'The status of an Action.',
    'rdfs:label'     : 'ActionStatusType',
    'rdfs:subClassOf': {
      '@id': 'schema:StatusEnumeration'
    }
  }, {
    '@id'         : 'schema:PotentialActionStatus',
    '@type'       : 'schema:ActionStatusType',
    'rdfs:comment': 'A description of an action that is supported.',
    'rdfs:label'  : 'PotentialActionStatus'
  }, {
    '@id'         : 'schema:CompletedActionStatus',
    '@type'       : 'schema:ActionStatusType',
    'rdfs:comment': 'An action that has already taken place.',
    'rdfs:label'  : 'CompletedActionStatus'
  }, {
    '@id'         : 'schema:FailedActionStatus',
    '@type'       : 'schema:ActionStatusType',
    'rdfs:comment': 'An action that failed to complete. The action\'s error property and the HTTP return code contain more information about the failure.',
    'rdfs:label'  : 'FailedActionStatus'
  }, {
    '@id'         : 'schema:ActiveActionStatus',
    '@type'       : 'schema:ActionStatusType',
    'rdfs:comment': 'An in-progress action (e.g, while watching the movie, or driving to a location).',
    'rdfs:label'  : 'ActiveActionStatus'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/InternationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Existing, occurring, or carried on between two or more nations.',
    'rdfs:label'  : 'InternationalNationalScope'
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/CommitmentAction.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A pledge or undertaking made by an Actor towards a Thing',
    'rdfs:label'     : 'CommitmentAction',
    'rdfs:subClassOf': {
      '@id': 'schema:Action'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : '',
    'rdfs:label'     : 'NationalScopeType',
    'rdfs:subClassOf': {
      '@id': 'schema:Enumeration'
    }
  }, {
    '@id'                  : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/nationalScope.mjs',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'The the national scope of the organization',
    'rdfs:label'           : 'nationalScope',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:rangeIncludes': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NOORG.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Action agenda org reference that has not been whos type and non profit status has not been confirmed',
    'rdfs:label'     : 'NOORG',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IPLC.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Indigenous peoples and local communities (IPLCs) are, typically, ethnic groups who are descended from and identify with the original inhabitants of a given region, in contrast to groups that have settled, occupied or colonized the area more recently.',
    'rdfs:label'     : 'IPLC',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/SubnationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Relating to single Administrative area within a nation',
    'rdfs:label'  : 'SubnationalNationalScope'
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IGO.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'An intergovernmental organization (IGO) or international organization is an organization composed primarily of sovereign states (referred to as member states), or of other intergovernmental organizations. IGOs are established by a treaty that acts as a charter creating the group.',
    'rdfs:label'     : 'IGO',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Coalition.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Coalition  is the denotation for a group formed when two or more people or Organizations agree to work together temporarily in a partnership to achieve a common goal.',
    'rdfs:label'     : 'Coalition',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalNationalScope.mjs',
    '@type'       : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/NationalScopeType.mjs',
    'rdfs:comment': 'Relating to a nation; common to or characteristic of a whole nation or multiple subnational parts there of.',
    'rdfs:label'  : 'NationalNationalScope'
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/UNCS.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'United Nations Common System',
    'rdfs:label'     : 'UNCS',
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IGO.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/SoleProprietorship.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'A Sole Proprietorship is an unincorporated business with only one owner who pays personal income tax on profits earned. Sole proprietorships are easy to establish and dismantle, due to a lack of government involvement, making them popular with small business owners and contractors.',
    'rdfs:label'     : 'SoleProprietorship',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Partnership.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Partnership consists of two or more legal entities pooling their resources to operate a shared objective.',
    'rdfs:label'     : 'Partnership',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/REIG.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Regional economic integration organization',
    'rdfs:label'     : 'REIG',
    'rdfs:subClassOf': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/IGO.mjs'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/OrganizationSize.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Size of an organization by the number of employees',
    'rdfs:label'     : 'OrganizationSize',
    'rdfs:subClassOf': {
      '@id': 'schema:QuantitativeValue'
    }
  }, {
    '@id'            : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Association.mjs',
    '@type'          : 'rdfs:Class',
    'rdfs:comment'   : 'Association is a connection or cooperative link between people or organizations',
    'rdfs:label'     : 'Association',
    'rdfs:subClassOf': {
      '@id': 'schema:Organization'
    }
  }, {
    '@id'                  : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/size.mjs',
    '@type'                : 'rdf:Property',
    'rdfs:comment'         : 'Organization size',
    'rdfs:label'           : 'size',
    'schema:domainIncludes': {
      '@id': 'schema:Organization'
    },
    'schema:rangeIncludes': {
      '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/OrganizationSize.mjs'
    }
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/TrueNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'TrueNonprofit'
  }, {
    '@id'         : 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/FalseNonprofit.mjs',
    '@type'       : 'schema:NonprofitType',
    'rdfs:comment': 'An organization operations do not generate profit.',
    'rdfs:label'  : 'FalseNonprofit'
  } ]
}